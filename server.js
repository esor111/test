import express from "express";

const app = express();
const port = 3008;

app.get("/", (req, res) => {
  res.send("Hello man!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
