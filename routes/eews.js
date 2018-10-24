var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')
var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"

/* GET users listing. */
router.get('/', function(req, res, next) {
    fetch('http://data.bmkg.go.id/autogempa.xml')
    .then(res => res.text())
    .then(body =>parseString(body, function (err, result) {
        console.dir(result);
        console.log(result.Infogempa.gempa)
        console.log(result.Infogempa.gempa.Tanggal)
        console.log(result.Infogempa.gempa.Jam)
        console.log(result.Infogempa.gempa.Magnitude)
        console.log(result.Infogempa.gempa.Kedalaman)
        console.log(result.Infogempa.gempa.Wilayah1)
        console.log(result.Infogempa.gempa.gempa)
        res.json(result.Infogempa.gempa)
    }));
});

module.exports = router;

[{
    "Tanggal":["11-Oct-18"],
    "Jam":["09:55:44 WIB"],
    "point":[{
        "coordinates":["126.71,-4.95"]
    }],
    "Lintang":["4.95 LS"],
    "Bujur":["126.71 BT"],
    "Magnitude":["5.6 SR"],
    "Kedalaman":["10 Km"],
    "_symbol":["imagesSWF/m3b.swf"],
    "Wilayah1":["137 km Tenggara BURUSELATAN-MALUKU"],
    "Wilayah2":["181 km Tenggara BURU-MALUKU"],
    "Wilayah3":["217 km BaratDaya AMBON-MALUKU"],
    "Wilayah4":["275 km BaratDaya SERAMBAGIANBARAT-MALUKU"],
    "Wilayah5":["2215 km TimurLaut JAKARTA-INDONESIA"],
    "Potensi":["tidak berpotensi TSUNAMI"]
}]