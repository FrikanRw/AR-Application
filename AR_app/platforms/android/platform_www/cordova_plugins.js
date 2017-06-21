cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.ezartech.ezar.snapshot.snapshot",
        "file": "plugins/com.ezartech.ezar.snapshot/www/snapshot.js",
        "pluginId": "com.ezartech.ezar.snapshot",
        "merges": [
            "ezar"
        ]
    },
    {
        "id": "com.ezartech.ezar.videooverlay.videoOverlay",
        "file": "plugins/com.ezartech.ezar.videooverlay/www/videoOverlay.js",
        "pluginId": "com.ezartech.ezar.videooverlay",
        "merges": [
            "ezar"
        ]
    },
    {
        "id": "com.ezartech.ezar.videooverlay.camera",
        "file": "plugins/com.ezartech.ezar.videooverlay/www/camera.js",
        "pluginId": "com.ezartech.ezar.videooverlay",
        "clobbers": [
            "camera"
        ]
    },
    {
        "id": "cordova-plugin-device-motion.Acceleration",
        "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "id": "cordova-plugin-device-motion.accelerometer",
        "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.CompassError",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.CompassHeading",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.compass",
        "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ezartech.ezar.snapshot": "0.2.7",
    "com.ezartech.ezar.videooverlay": "0.2.10",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-device-motion": "1.2.3",
    "cordova-plugin-device-orientation": "1.0.5",
    "cordova-plugin-geolocation": "2.3.0",
    "cordova-plugin-whitelist": "1.3.1"
};
// BOTTOM OF METADATA
});