AppVersionProxy = {
  getVersionNumber: function (successCallback, failCallback, args) {
    successCallback("$VERSION$");
  },
  getAppName: function (successCallback, failCallback, args) {
    successCallback("$NAME$");
  },
  getPackageName: function (successCallback, failCallback, args) {
    successCallback("$PACKAGE_NAME$");
  },
  getVersionCode: function (successCallback, failCallback, args) {
    successCallback("$VERSION_CODE$");
  }
};
cordova.commandProxy.add("AppVersion", AppVersionProxy);
