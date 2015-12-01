/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ui-draggable',

  included: function(app) {
      this._super.included(app);

      app.import(app.bowerDirectory + '/jquery.ui/ui/core.js');
      app.import(app.bowerDirectory + '/jquery.ui/ui/widget.js');
      app.import(app.bowerDirectory + '/jquery.ui/ui/mouse.js');
      app.import(app.bowerDirectory + '/jquery.ui/ui/draggable.js');
      app.import(app.bowerDirectory + '/jquery-ui-touch-punch/jquery.ui.touch-punch.js');
    }
};
