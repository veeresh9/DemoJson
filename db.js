const { require } = require("jsforce/lib/core");

let db = require("DemoJson/db.json");
console.log(db[0].title);