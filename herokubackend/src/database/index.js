const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://wgcostta:mongoose@cluster0-lqn95.mongodb.net/noderest?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.Promise = global.Promise;

module.exports = mongoose;

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://wgcostta:mongoose@cluster0-lqn95.mongodb.net/noderest?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 */
