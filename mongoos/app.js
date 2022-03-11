const mongoose = require("mongoose");

// Connection creation and creation new db
mongoose.connect("mongodb://localhost:27017/paktolus", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then ( () => console.log("connect")).catch((err) => console.log(err))
