(function (exports, $) {
  'use strict';

  var $window = $(window),
      $html = $('html'),
      $document = $(document),
      lang = $html.attr('lang'),
      app;

  app = {
    cache: {
      $window: $window,
      $html: $html
    },
    store: {
      lang: lang
    },
    pubSub: $document
  };

  $(function() {
    app.cache.$body = $('body');
  });

  exports.app = app;
})(this, jQuery);
