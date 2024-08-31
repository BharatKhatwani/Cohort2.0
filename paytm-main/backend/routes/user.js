const express = require('express');
const router = express.Router();
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const bcrypt = require('bcryptjs');
const { authMiddleware } = require("../middleware");

// Password schema
const passwordSchema = zod.string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[a-zA-Z]/, "Password must contain at least one letter")
  .regex(/[0-9]/, "Password must contain at least one number");

// Signup body schema
const signupBody = zod.object({
  username: zod.string().email("Invalid email address"),
  firstName: zod.string().min(3, "First name is required"),
  lastName: zod.string().min(3, "Last name is required"),
  password: passwordSchema,
});

// Signup route
router.post("/signup", async (req, res) => {
  const parseResult = signupBody.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      message: "Invalid inputs",
      errors: parseResult.error.errors,
    });
  }

  const { username, password, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ message: "Email already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hashedPassword,
      firstName,
      lastName,
    });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      message: "User created successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Signin body schema
const signinBody = zod.object({
  username: zod.string().email("Invalid email address"),
  password: zod.string().min(1, "Password is required"),
});

// Signin route
router.post("/signin", async (req, res) => {
  const parseResult = signinBody.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      message: "Invalid inputs",
      errors: parseResult.error.errors,
    });
  }

  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: "User signed in successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

const updateBody = zod.object({
  password: passwordSchema.optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional()
});

router.put("/", authMiddleware, async (req, res) => {
  const parseResult = updateBody.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      message: "Invalid inputs",
      errors: parseResult.error.errors,
    });
  }

  const { userId } = req.user;   // Ensure authMiddleware sets req.user

  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    await User.updateOne({ _id: userId }, req.body);

    res.json({
      message: "Update successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Bulk users retrieval route
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  try {
    const users = await User.find({
      $or: [
        { firstName: { $regex: filter, $options: "i" } },
        { lastName: { $regex: filter, $options: "i" } }
      ]
    });

    res.json({
      users: users.map(user => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id
      }))
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});
router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body)
  if (!success) {
      return res.status(411).json({
          message: "Email already taken / Incorrect inputs"
      })
  }

  const existingUser = await User.findOne({
      username: req.body.username
  })

  if (existingUser) {
      return res.status(411).json({
          message: "Email already taken/Incorrect inputs"
      })
  }

  const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
  })
  const userId = user._id;

  /// ----- Create new account ------

  await Account.create({
      userId,
      balance: 1 + Math.random() * 10000
  })

  /// -----  ------

  const token = jwt.sign({
      userId
  }, JWT_SECRET);

  res.json({
      message: "User created successfully",
      token: token
  })
})
router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
      userId: req.userId
  });

  res.json({
      balance: account.balance
  })
});

module.exports = router;
