const express = require("express");
require("./connection/db_connection");
const Routes = require("./routes/Routes");

const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
global.serverUrl = process.env.SERVER_URL || `http://localhost:${port}`;

app.use(express.json());

// Use the routes
app.use("/api/v1", Routes);

app.listen(port, (err) => {
  console.log(`server running at : ${serverUrl}`);
});
