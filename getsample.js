var request = require('request');
var url = 'http://192.168.232.1:8080/bridge'


request({
    url: url +'/hue' + '/1',
    method: 'GET',
}, function(err, response, body) {
    var philips = JSON.parse(body);
    console.log(philips);
})
