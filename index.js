require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "CRUD COLLAB SERVER" });
});

app.use("/api/task", taskRoutes);

const startServer = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: "COLLAB" });
    app.listen(PORT, () => {
      console.log(`App is Running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
