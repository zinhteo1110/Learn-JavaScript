var config = new SIP.UA({
	authorizationUser: "webcall",
	password: "112233",
	displayName: "WebCall",
	uri: 'webcall@freeswitch.ddns.net:5060',
	transportOptions: {
		wsServers: ['wss://freeswitch.ddns.net:7443']
	},
	userAgentString: 'SIP.js/0.7.0 BB',
	traceSip: true,
	register: false
});

var ua;

ua = new SIP.UA(config)

var elements = {
	status: 	document.getElementById("ua-status"),
	regis: 		document.getElementById("ua-regis"),
	call: 		document.getElementById("call"),
	endcall:    document.getElementById("endcall")
};

elements.status.innerHTML = 'Connecting - Unregistered! Please, press button Register to regis a extension.';

//console.log(document.getElementById("area-1"));

ua.on('connected', function () {
	console.log("=====> 1. Connected - (Unregistered)!");
});	

ua.on('registered', function () {
	console.log(" =====> 2. Connected - (Registered)!");
});

ua.on('unregistered', function () {
	console.log(" ===> 3. Connected - (Unregistered)!");
});

//tạo sự kiện nhấn để register hoặc unregister.
elements.regis.addEventListener('click', function() {
	if(!ua) return;

	if (ua.isRegistered()) {
		ua.unregister();
	} else {
		ua.register();
	}
},false);

// tạo sự kiện nhấn --> click to call
function inviteSubmit(uri) {
	//var uri = "3003@freeswitch.ddns.net";

	var session = ua.invite(uri, {
			media: {
				constraints: {
					audio: true
				}
		}
	});
}
elements.call.addEventListener('click', inviteSubmit('3003@freeswitch.ddns.net'), false);


