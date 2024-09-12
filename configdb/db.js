const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database conectada");
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    });
};
