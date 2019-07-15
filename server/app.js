const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.SECRET_KEY);
const app = express();

mongoose.connect(
  `mongodb+srv://jess:${
    process.env.SECRET_KEY
  }@jessetest-67b96.mongodb.net/test?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => {
  console.log("connected to the database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
