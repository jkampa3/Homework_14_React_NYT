//npm requirements
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//mongoose
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ReactNYTSearch",
  {
    useMongoClient: true
  }
);

//express for html files
app.use(express.static('./public'));

// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
