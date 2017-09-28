#!/usr/bin/env node
'use strict';

var fs = require('fs');
var xml2js = require('xml2js');


function loadConfigXMLDoc(filePath) {
    var json = "";
    try {
        var fileData = fs.readFileSync(filePath, 'utf8');
        var parser = new xml2js.Parser();
        parser.parseString(fileData, function (err, result) {
            json = result;
        });
        return json;
    } catch (ex) {
        console.log(ex)
    }
}

var configXMLPath = "config.xml";
var rawJSON = loadConfigXMLDoc(configXMLPath);
var version = rawJSON.widget.$.version;
var package_name = rawJSON.widget.$.id;
var displayName = rawJSON.widget.name[0];
var [MAJOR, MINOR, PATCH] = version.split(".");
var versionCode = PATCH + MINOR * 100 + MAJOR * 10000

var files = [
    "platforms/browser/www/plugins/cordova-plugin-app-version/src/browser/AppVersionProxy.js",
    "platforms/browser/platform_www/plugins/cordova-plugin-app-version/src/browser/AppVersionProxy.js"
];

for (var i = 0; i < files.length; i++) {
    try {
        var contents = fs.readFileSync(files[i]).toString();
        var replaced = contents
            .replace(/\$VERSION\$/g, version)
            .replace(/\$NAME\$/g, displayName)
            .replace(/\$PACKAGE_NAME\$/g, package_name)
            .replace(/\$VERSION_CODE\$/g, versionCode);

        fs.writeFileSync(files[i], replaced);
    } catch (err) { }
}
