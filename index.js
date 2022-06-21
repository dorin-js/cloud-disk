const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");
const fileRouter = require("./routes/file.routes");
const cors = require("cors");

const app = express();
const PORT = config.get("serverPort");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "welcome to my app" });
});
app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const start = async () => {
  try {
    mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log("server started on ", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
