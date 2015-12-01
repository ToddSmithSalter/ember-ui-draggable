/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var _this = this;
    return this.addBowerPackageToProject('jquery.ui', '^1.11.4').then(function() {
      return _this.addBowerPackageToProject('jquery-ui-touch-punch');
    });
  }
};
