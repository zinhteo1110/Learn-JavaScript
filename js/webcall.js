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
	//userAgentString: 'SIP.js/0.13.6',
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
ua.on('invite', function (session) {
     //createNewSessionUI(session.remoteIdentity.uri, session);
     session.accept();
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

	var uri = "3003@freeswitch.ddns.net";
	elements.uauri.value = '';

	var session = ua.invite(uri, {
		media: {
		//sessionDescriptionHandlerOptions: {	
			constraints: {
				audio: true,
				video: true
			},
			render: {
				remote: document.getElementById('remoteVideo'),
				local: document.getElementById('localVideo')
			}
		}
	});


	if (!uri) return;

	//console.log("====> thong tin options cho ham invite la: "+options);

	//var session = ua.invite(uri, options);
	
	console.log("xxxxxxxxxxxxx> session: "+session.on);
	//console.log("======> session.on:"+session.on);

	// session.on('trackAdded', function() {
	// 	var pc = session.sessionDesscriptionHandler.peerConnection;
	// 	var remoteStream = new MediaStream();
	// 	pc.getReceivers().forEach(function(receiver) {
	// 		remoteStream.addTrack(receiver.track);
	// 	});
	// 	console.log(" =====> thong in cua pc: "+pc);	//The trackAdded event is simply a helper, and does not pass any information.
	// 	session.mediaHandler.render(session.renderHint);
	// 	console.log(session.mediaHandler.render);
	// });

	console.log("=====> thong tin session remote : "+session.remoteIdentity.uri);


	//createNewSessionUI(uri, session);

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




//==============function createNewSessionUI==============

function createNewSessionUI(uri, session) {
	var sessionUI = {};

	uri = session ? session.remoteIdentity.uri : SIP.Utils.normalizeTarget(uri, ua.configuration.hostport_params);
    var displayName = (session && session.remoteIdentity.displayName) || uri.user;

  	if (!uri) { return; }

  	sessionUI.session 			= session;
  	sessionUI.displayName		= elements.display;
  	sessionUI.renderHint        = {
    	remote: sessionUI.video
  	};
  
  	// sessionUI.displayName.textContent = displayName || uri.user;
  	// elements.display.innerHTML = '<' + uri + '>';
  	// session.renderHint();

  	var options = {
      media: {
        constraints: {
          audio: true,
        //video: video
        }
      }
    };

    if (!session) {
      /* TODO - Invite new session */
      /* Don't forget to enable buttons */
      session = sessionUI.session = ua.invite(uri, options);

      setUpListeners(session);
    } else if (session.accept && !session.startTime) { // Incoming, not connected
      session.accept(options);
    }

    function setUpListeners(session) {
    	session.on('accepted', function () {
    		elements.callbutton.disabled = true;
    		session.mediaHandler.render(session.renderHint);
    });
  	
	}
}
// end function createNewSessionUI