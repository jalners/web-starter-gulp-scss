(function (app, $) {
  'use strict';

  var cache = app.cache,
      _options = {},
      deviceDetect;

  function init() {
    type();
    os();
    browser();
    addClass();
  }

  function type() {
    if (device.mobile()) {
      _options.type = 'phone'
    } else if (device.tablet()) {
      _options.type = 'tablet'
    } else if (device.desktop()) {
      _options.type = 'desktop'
    }
  }

  function os() {
    if (navigator.appVersion.indexOf('Windows') != -1) {
      _options.os = 'windows'
    } else if (navigator.appVersion.indexOf('Macintosh') != -1) {
       _options.os = 'mac'
    } else if (navigator.appVersion.indexOf('X11') != -1) {
      _options.os = 'unix'
    } else if (navigator.appVersion.indexOf('Linux') != -1) {
      _options.os = 'linux'
    }
  }

  function browser() {
    _options.browser = {
      name: platform.name.toLowerCase(),
      version: parseFloat(platform.version)
    }
  }

  function addClass() {
    cache.$html.addClass(_options.type).
      addClass(_options.os).
      addClass(_options.browser.name).
      addClass(_options.browser.name + _options.browser.version);
  }

  deviceDetect = {
    init: init
  };

  app.deviceDetect = deviceDetect;
})(this.app, jQuery);