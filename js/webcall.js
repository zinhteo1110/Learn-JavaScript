var elements = {
	status: 			document.getElementById("ua-status"),
	regisbutton: 		document.getElementById("ua-regis"),
	callbutton: 		document.getElementById("startCall"),
	endcallbutton:    	document.getElementById("endCall"),
	result: 			document.getElementById("result"),
	display:  			document.getElementById("displayname"), 
	uauri:  			document.getElementById("ua-uri")
};

var config = {
	authorizationUser: '',
	password: '',
	displayName: '',
	uri: '',
	wsServers: '',
	userAgentString: 'SIP.js/0.7.0 BB',
	traceSip: true,
	register: false
}

config.authorizationUser = 'webcall';
config.password = '112233';
config.displayName = 'webcall';
config.uri = 'webcall@freeswitch.ddns.net:5060';
config.wsServers = 'wss://freeswitch.ddns.net:7443';

var ua = new SIP.UA(config);


elements.status.innerHTML = 'Connecting ...';


ua.on('connected', function () {
	console.log("=====> 1. Connected - (Unregistered)!");
	elements.status.innerHTML = '-----> 1.Connected (Unregistered)';
});	

ua.on('registered', function () {
	console.log(" =====> 2. Connected - (Registered)!");
	elements.regisbutton.innerHTML = 'Unregister';
	elements.status.innerHTML = '-----> 2.Connected (Registered): Click to Call';
});

ua.on('unregistered', function () {
	console.log(" ===> 3. Connected - (Unregistered)!");
	elements.regisbutton.innerHTML = 'Register';
	elements.status.innerHTML = '-----> 3.Connected (Unregistered)';
});

// Accept an inbound (User Agent Server) Session
ua.on('invite', function (zinhteo) {
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
    	}
    });

    //click to end call.
    elements.endcallbutton.addEventListener('click', function () {
    	session.bye();
    	alert("Call Ended");
    }, false);

});

//tạo sự kiện nhấn để register hoặc unregister.
elements.regisbutton.addEventListener('click', function() {
	var options1 = {
		'extraHeaders': [ 'X-Foo: foo', 'X-Bar: bar' ]
	};

	var options2 = {
		'all': true,
		'extraHeaders': [ 'X-Foo: foo', 'X-Bar: bar' ]
	};

	if(!ua) return;

	if (ua.isRegistered()) {
		ua.unregister(options2);
	} else {
		ua.register(options1);
	}

},false);

// tạo sự kiện nhấn --> click to call
function inviteSubmit(e) {
	e.preventDefault();
    e.stopPropagation();

	var uri = elements.uauri.value;
	elements.uauri.value = '';

	var session = ua.invite(uri, {
		media: {
			constraints: {
				audio: true,
				video: false
			},
			render: {
				remote: document.getElementById('remoteVideo'),
				local: document.getElementById('localVideo')
			}
		}
	});

	if (!uri) return;

	console.log("xxxxxxxxxxxxx> session: "+session.on);
	console.log("=====> thong tin session remote : "+session.remoteIdentity.uri);

	// Click to end call
	function endcallSubmit() {
	
		console.log("===> Thong tin session neu co ben trong function endcallSubmit:"+session);

		if (!session) {
			return;
		} else if (session.startTime) { // Connected
			session.bye();
			console.log(">>>>>>Day la session.bye!");
			delete session;
			result.innerHTML = "Ban vua su dung: session.bye!";
			alert("Call Ended");
		} else if (session.reject) { // Incoming
			session.reject();
			console.log(">>>>>>Day la session.reject!");
			result.innerHTML = "Ban vua su dung: session.reject!";
		} else if (session.cancel) { // Outbound
			session.cancel();
			console.log(">>>>>>Day la session.cancel");
			delete session;
			result.innerHTML = "Ban vua su dung: session.cancel!";
		}
	}
	elements.endcallbutton.addEventListener('click', endcallSubmit, false);
}
elements.callbutton.addEventListener('click', inviteSubmit, false);
console.log(ua);




