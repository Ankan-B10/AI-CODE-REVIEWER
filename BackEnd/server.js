require("dotenv").config(); //help to fetch the env api key
const app = require("./src/app");

app.listen(8009, () => {
  console.log("server is running");
});
