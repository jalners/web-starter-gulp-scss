(function (app, $) {
  'use strict';

  var utils;

  function getScreenWidth() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName("body")[0];
    return w.innerWidth || e.clientWidth || g.clientWidth;
  }

  utils = {
    getScreenWidth: getScreenWidth
  };

  app.utils = utils;
})(this.app, jQuery);
