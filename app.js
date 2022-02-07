const express = require("express");
const app = express();

//middleware
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
