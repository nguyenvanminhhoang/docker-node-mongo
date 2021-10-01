const mongoose = require("mongoose");

module.exports = (URL) => {
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log("Connect to MongoDB successed");
    }).catch(() => {
        console.log("Connect to MongoDB failed");
    })
};
