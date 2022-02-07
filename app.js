const express = require("express");
const postgresClient = require("./db/config");
const taskRoute = require("./routes/taskRoute");
const app = express();

//middleware
app.use(express.json());

// Routes
app.use("/", taskRoute);

app.listen(5000, () => {
  console.log("server has started on port 5000");
  postgresClient.connect((err) => {
    if (err) {
      console.log("connection error", err.stack);
    } else {
      console.log("postgres connection successfully");
    }
  });
});
