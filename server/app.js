const express = require("express");
const postgresClient = require("./db/config");
const cors = require("cors");
const taskRoute = require("./routes/taskRoute");

const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDoc = YAML.load("./api.yaml");

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));

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
