const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const Field = require("./model/field");

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));
dotenv.config({ path: "/config.env" });

//database connection
const DB =
  "mongodb+srv://namanpahariya21:Pahariya21012003@cluster0.kfprujy.mongodb.net/Sevltos?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB).then(() => {
  console.log("DB connect successfully");
});

//CRUD operation with error handling.......

//create method
app.post("/", async (req, res) => {
  try {
    let user = await Field.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "error accured",
    });
  }
});

//get method...
app.get("/", async (req, res) => {
  try {
    let getAll = await Field.find();

    res.status(200).json({
      status: "success",
      data: {
        getAll,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "error accured",
    });
  }
});

//update method...
app.patch("/:id", async (req, res) => {
  let updateField = await Field.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "success",
    data: {
      updateField,
    },
  });
});

//delete method...
app.delete("/:id", async (req, res) => {
  await Field.findByIdAndDelete(req.params.id, req.body);

  res.status(200).json({
    status: "success",
    data: null,
  });
});

//server connection...
const port = 5000;
app.listen(port, () => {
  console.log(`listening on PORT ${port}`);
});
