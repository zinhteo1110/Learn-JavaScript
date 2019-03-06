var session;

var endButton = document.getElementById('endCall');
endButton.addEventListener("click", function () {
	session.bye();
	alert("Call Ended");
}, false);

var userAgent = new SIP.UA({
	uri: 'webcall2@freeswitch.ddns.net:5060',
	wsServers: ['wss://freeswitch.ddns.net:7443'],
	authorizationUser: 'webcall2',
	password: '112233'
});

userAgent.on('invite', function (zinhteo) {
	session = zinhteo;
	session.accept({
		media: {
			constraints: {
				audio: true,
				video: true
			},
			render: {
				remote: document.getElementById('remoteVideo'),
				local:  document.getElementById('localVideo')
			}
		}
	});
});