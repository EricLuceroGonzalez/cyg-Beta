// Create varible that ...

// ... manage Mongoose
const mongoose = require("mongoose");

// ... manage URL of mongo-atlas db (from cluster) *sended to env*
// connect that mongoose with Mongo cluster
db_uri = process.env.MONGODB;

// console.log(db_uri);

mongoose.connect(
  db_uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) {
      console.log("MongoDB - Conexion exitosa :):");
    } else {
      console.log(`Error en la conexion: \n ${err}`);
    }
  }
);