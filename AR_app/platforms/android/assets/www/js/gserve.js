// File for loading json from geoserver

// Variable setup

var geoOWS ='http://frikancarto.co.za:8080/geoserver/viva/ows?';

var defaultParameters = {
    service : 'WFS',
    version : '1.0',
    request : 'GetFeature',
    typeName : 'viva:ReproEpi',
	 maxFeatures : '50',
    outputFormat : 'text/javascript',
	format_options : 'callback:getJson',
   
   
};


var parameters = L.Util.extend(defaultParameters);
var URL = geoOWS + L.Util.getParamString(parameters);
