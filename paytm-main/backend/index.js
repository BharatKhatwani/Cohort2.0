const express = require("express")
const cors = require("cors");


app.use(cors())
app.use(express.json());

const mainRouter = require("./routes/index.js")
const app= express()

app.get('/signup', )

app.use("/api/v1",mainRouter);
app.use("./api/v1/user")

app.listen(3000);