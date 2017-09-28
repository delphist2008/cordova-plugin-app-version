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


var getPreferenceValue = function (config, name) {
    var value = config.match(new RegExp('name="' + name + '" value="(.*?)"', "i"));
    if (value && value[1]) {
        return value[1]
    } else {
        return null
    }
};

var configXMLPath = "config.xml";
var rawJSON = loadConfigXMLDoc(configXMLPath);
var version = rawJSON.widget.$.version;
var id = rawJSON.widget.$.id;
var displayName = rawJSON.widget.name[0];
var [MAJOR, MINOR, PATCH] = version.split(".");
var versionCode = PATCH + MINOR * 100 + MAJOR * 10000

console.log([version, displayName, id, versionCode].join("|"));
// var files = [
//     "platforms/browser/www/plugins/cordova-plugin-googleplus/src/browser/GooglePlusProxy.js",
//     "platforms/browser/platform_www/plugins/cordova-plugin-googleplus/src/browser/GooglePlusProxy.js"
// ];

// for (var i = 0; i < files.length; i++) {
//     try {
//         var contents = fs.readFileSync(files[i]).toString();
//         fs.writeFileSync(files[i], contents.replace(/CLIENT_ID/g, '"' + CLIENT_ID + '"'));
//     } catch (err) { }
// }
