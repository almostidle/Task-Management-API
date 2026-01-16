const express = require("express");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// routes
const testRoutes = require("./routes/testRoutes");

// home check
app.get("/", (req, res) => {
  res.send("Server is running");
});

// mount routes
app.use("/", testRoutes);

// start server AT THE END
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
