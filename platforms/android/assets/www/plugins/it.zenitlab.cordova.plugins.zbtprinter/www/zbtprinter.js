cordova.define("it.zenitlab.cordova.plugins.zbtprinter.ZebraBluetoothPrinter", function(require, exports, module) { var exec = require('cordova/exec');

exports.print = function(str, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'print', [str]);
};


});
