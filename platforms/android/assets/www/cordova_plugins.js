cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.bluetooth/www/bluetooth.js",
        "id": "com.phonegap.plugins.bluetooth.bluetooth",
        "clobbers": [
            "bluetooth"
        ]
    },
    {
        "file": "plugins/it.zenitlab.cordova.plugins.zbtprinter/www/zbtprinter.js",
        "id": "it.zenitlab.cordova.plugins.zbtprinter.ZebraBluetoothPrinter",
        "clobbers": [
            "cordova.plugins.zbtprinter"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.bluetooth": "0.9",
    "it.zenitlab.cordova.plugins.zbtprinter": "1.0"
}
// BOTTOM OF METADATA
});