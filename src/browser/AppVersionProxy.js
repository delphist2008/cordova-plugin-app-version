var cordova = require('cordova'),
  proxy = require("cordova/exec/proxy");

proxy.add("AppVersion", {
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
});
