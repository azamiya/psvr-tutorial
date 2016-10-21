var socket = io.connect('localhost:7788');
var yaw = null;
var acc = {
	yaw : null,
	pit : null
};

socket.on('myFitstRecieving', function (data) {
	//console.log(data);
	acc.yaw = data.yaw;
	acc.pit = data.pitch;
	document.getElementById("receive-acc").innerHTML = "yaw : " + acc.yaw + ", pitch : " + acc.pit;
	//console.log(acc.yaw);
});
