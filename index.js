"use strict";

//http server
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const server = require("./server");
app.use(express.static(__dirname + '/client'));

server.start(app, http);

var acc = {
  yaw : null, 
  pitch : null
};

//Connect to PSVR
var PSVR = require("psvr");
var device = new PSVR();

io.sockets.on('connection', function(socket) {
  console.log("hello socket");
	device.on("data", function(data) {
	   console.log(data);
	   acc.yaw = data.yaw;
	   acc.pitch = data.pitch;
	   socket.emit('myFitstRecieving', acc);
	});
});