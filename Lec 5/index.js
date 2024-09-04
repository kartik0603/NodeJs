const express = require("express");
const dbConnect = require("./db");

const User= require("./user.schema");
// console.log(User);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Working");
});

// Create User
app.post("/user", async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await user.findOne({ email });

    if (userExist) {
        return res.status(409).send("User already exists");
    }

    const userCreate = await user.create({ name, email, password });
    res.status(201).send(userCreate);
});



// Delete User
app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    const userExist = await user.findByIdAndDelete(id);

    if (userExist) {
        res.status(200).send("User deleted");
    } else {
        res.status(404).send("User not found");
    }
});

// Update User
app.patch("/user/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const userExist = await user.findByIdAndUpdate(id, { name, email, password }, { new: true });

    if (userExist) {
        res.status(200).send(userExist);
    } else {
        res.status(404).send("User not found");
    }
});

app.listen(8089, () => {
    console.log("Server is running on port 8089");
    dbConnect();
});




// {
//     "username": "kartik",
//       "number": "9723164951",
//      " email": "kartikhirapara800@gmail.com",
//       "password": "Hello@1590"
//   }