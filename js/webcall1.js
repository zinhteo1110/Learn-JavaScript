var session;

var endButton = document.getElementById('endCall');
endButton.addEventListener("click", function () {
	session.bye();
	alert("Call Ended");
}, false);

var startButton = document.getElementById('startCall');
startButton.addEventListener("click", function () {
	session = userAgent.invite('sip:webcall2@freeswitch.ddns.net', options);
	alert("Call Started");
}, false);

var userAgent = new SIP.UA ({
	uri: 'webcall1@freeswitch.ddns.net:5060',
	wsServers: ['wss://freeswitch.ddns.net:7443'],
	authorizationUser: 'webcall1',
	password: '112233'
});

