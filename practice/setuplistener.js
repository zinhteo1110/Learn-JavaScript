function setUpListeners(session) {
    sessionUI.red.disabled = false;

    if (session.accept) {
      sessionUI.green.disabled = false;
      sessionUI.green.innerHTML = 'Accept';
      sessionUI.red.innerHTML = 'Reject';
    } else {
      sessionUI.green.innerHMTL = '...';
      sessionUI.red.innerHTML = 'Cancel';
    }

    session.on('accepted', function () {
      sessionUI.green.disabled = true;
      sessionUI.green.innerHTML = '...';
      sessionUI.red.innerHTML = 'Bye';
      sessionUI.dtmfInput.disabled = false;
      sessionUI.video.className = 'on';

      session.mediaHandler.render(sessionUI.renderHint);
    });

    session.mediaHandler.on('addStream', function () {
      session.mediaHandler.render(sessionUI.renderHint);
    });

    session.on('bye', function () {
      sessionUI.green.disabled = false;
      sessionUI.red.disabled = true;
      sessionUI.dtmfInput.disable = true;
      sessionUI.green.innerHTML = 'Invite';
      sessionUI.red.innerHTML = '...';
      sessionUI.video.className = '';
      delete sessionUI.session;
    });

    session.on('failed', function () {
      sessionUI.green.disabled = false;
      sessionUI.red.disabled = true;
      sessionUI.dtmfInput.disable = true;
      sessionUI.green.innerHTML = 'Invite';
      sessionUI.red.innerHTML = '...';
      sessionUI.video.className = '';
      delete sessionUI.session;
    });

    session.on('refer', function handleRefer (request) {
      var target = request.parseHeader('refer-to').uri;
      session.bye();

      createNewSessionUI(target, ua.invite(target, {
        media: {
          constraints: {
            audio: true,
            video: elements.uaVideo.checked
          }
        }
      }));
    });
  } //end fucntion setUpListeners


  =====> dong code bi hiem:      session.mediaHandler.render(sessionUI.renderHint);

  noi dung cua session.on: function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
}