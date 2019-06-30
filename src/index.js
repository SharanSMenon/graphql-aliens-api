var express = require("express");
var graphqlHTTP = require("express-graphql");
let expressPlayground = require("graphql-playground-middleware-express")
  .default;
let schema = require("./schema");
var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.use("/playground", expressPlayground({ endpointUrl: "/graphql" }));
app.listen(8080, () => console.log("Now browse to localhost:4000/graphql"));
