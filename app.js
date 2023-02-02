require("dotenv").config();
const express = require("express");
const index = require("./routes/index");
const app = express();
app.use(express.json());
app.use("/user", index);

const PORT = process.env.PORT;

//
app.get("/", (req, res) => {
  res.send("Hello");
});
console.log(index?.age);
//

app.listen(PORT, () => {
  require("./database");
  console.log(`Server is running at  http://localhost:${PORT}`);
});
