const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const routez = require("./routes/futad");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const url = "mongodb+srv://sharukajmal2:sharukdb@cluster0.cfzoga8.mongodb.net/Futad";
//Scheduler Related Codes
//=====================================================================================================

//let date;  

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

mongoose
    .connect(url)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use("/futad", routez);

app.use(bodyParser.json());
app.listen(port, () => {
  console.log("app wasrendereing", port);
});
