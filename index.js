const express = require("express");
const usersRouter = require("./routes/users");
const app = express();
const port = 3000;
const { Client } = require("pg");
const client = new Client({
  user: "joed",
  host: "postgres://joed:Ov6GH4LYKiNCkYzDL1bsd6yxZsnRMnwf@dpg-cjrufkdm702s738asrgg-a.oregon-postgres.render.com/reactpg",
  password: "Ov6GH4LYKiNCkYzDL1bsd6yxZsnRMnwf",
  port: "5432",
  Database: "reactpg",
});
const connect = async () => await client.connect();
connect();
const createTable = async () =>
  await client.query(
    "CREATE TABLE parse (title varchar(40),address varchar, content varchar )"
  );
const table = createTable();
console.log(table);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});