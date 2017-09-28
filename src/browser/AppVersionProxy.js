cordova.define("cordova-plugin-app-version.AppVersionProxy", function(require, exports, module) {

var AppVersionProxy = {
  getVersionNumber: function (successCallback, failCallback, args) {
	var $VERSION$ = placeholder;
    successCallback($VERSION$);
  },
  getAppName: function (successCallback, failCallback, args) {
	var $NAME$ = placeholder;
    successCallback($NAME$);
  },
  getPackageName: function (successCallback, failCallback, args) {
	var $PACKAGE_NAME$ = placeholder;
    successCallback($PACKAGE_NAME$);
  },
  getVersionCode: function (successCallback, failCallback, args) {
	var $VERSION_CODE$ = placeholder;
    successCallback($VERSION_CODE$);
  }
};

module.exports = AppVersionProxy;
require("cordova/exec/proxy").add("AppVersion", module.exports);
});
