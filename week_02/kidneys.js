const express = require("express");
const app = express();

const user = [{
    name: "bharat",
    kidneys: [
        { healthy: false },
        { healthy: true }
    ]
}];

app.use(express.json());

app.get("/", function(req, res) {
    // Check if user array is not empty and has at least one element
    if (user.length > 0) {
        let noOfHealthyKidneys = 0;
        let numberOfKidneys = user[0].kidneys.length;

        for (let i = 0; i < numberOfKidneys; i++) {
            if (user[0].kidneys[i].healthy === true) {
                noOfHealthyKidneys++;
            }
        }

        let numberOfUnhealthyKidneys = numberOfKidneys - noOfHealthyKidneys;

        res.json({
            numberOfKidneys,
            noOfHealthyKidneys,
            numberOfUnhealthyKidneys
        });
    } else {
        res.status(500).json({ error: "User data is not properly defined" });
    }
});

app.put("/",(req,res)=>{
    const ishelthy = req.body.ishelthy;
    user[0].kidneys.push({uuuu
       healthy:ishelthy
    })
    res.json({
msg: "put is done "
    })
})
app.listen(3002, () => {
    console.log("Server is running on port 3001");
});
