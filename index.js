const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(process.env.APP_PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.APP_PORT || 3000}`);
});