
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("This is the first test with pull in public repository");
})

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3001, () => {
    console.log("OK")
})
