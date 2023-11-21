const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const database = require("./config/database");
database.connect();

//Router v1
const routesVer1 = require("./api/v1/routes/index.route");

const app = express();
const port = process.env.PORT;

//parse application/json
app.use(bodyParser.json());

// const corsOptions = {
//   origin: "https://example.com",
// };// ten mien duoc cho phep truy cap api

//cors
app.use(cors()); // tranh loi front-end k truy cap dc api

//Router v1
routesVer1(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
//CORS (Cross-origin resource sharing) chia sẻ tài nguyên chéo nhau