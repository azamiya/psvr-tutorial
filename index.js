var PSVR = require("psvr");
var device = new PSVR();
device.on("data", function(data) {
   console.log(data);
});