const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const routes = require("./routes/api");

app.use(cors());
app.use("/", routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
