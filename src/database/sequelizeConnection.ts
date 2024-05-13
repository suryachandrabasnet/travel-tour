import { Dialect, Sequelize } from "sequelize";
import dbConfig from "./dbConfig";

const { username, password, database, host, dialect, port } =
  dbConfig.development;

const sequelize = new Sequelize(database!, username!, password!, {
  host: host,
  port: +port!,
  dialect: dialect! as Dialect,
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connection Successful!!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database", err);
  });

export default sequelize;
