var session;

var endButton = document.getElementById('endCall');
endButton.addEventListener("click", function () {
	session.bye();
	alert("Call Ended");
}, false);

var startButton = document.getElementById('endCall');
startButton.addEventListener("click", function () {
	session = userAgent.invite('webcall2@freeswitch.ddns.net', options);
	alert("Call Started");
}, false);

var userAgent = new SIP.UA({
	uri: 'webcall1@freeswitch.ddns.net:5060',
	wsServers: ['wss://freeswitch.ddns.net:7443'],
	authorizationUser: 'webcall1',
	password: '112233'
});

<<<<<<< HEAD
var options = {
	media: {
		constraints: {
			audio: true,
			video: true
		},
		render: {
			remote: document.getElementById('remoteVideo'),
			local:  document.getElementById('localVideo')
=======
userAgent.on('invite', function (zinhteo) {
	session = zinhteo;
	session.accept({
		media: {
			constraints: {
				audio: true,
				video: false
			},
			render: {
				remote: document.getElementById('remoteVideo'),
				local:  document.getElementById('localVideo')
			}
>>>>>>> 8f20c14275913e07f8eba0561cce57aa75dd6147
		}
	}
};