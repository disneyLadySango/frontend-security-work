const express = require("express");
const app = express();
const port = 3050;

app.use(express.static("public"));
app.get("/", (req, res, next) => {
  res.end("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
