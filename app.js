const express = require("express");
const app = express();
const port = 1200;
const { sequelize } = require("./models");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const Router = require("./routes");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결됨");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());

app.use("/text", Router.PostRoute);

app.listen(port, () => {
  console.log(port, "실행");
});
// host.docker.internal
//selecet user, host from mysql.users (mysql cli 시스템 설정할때)
