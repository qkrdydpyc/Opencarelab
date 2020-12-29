var request = require('request');
var url = 'http://localhost:8080/bridge'

request({
    url: url +'/hue' + '/1' + '/action',
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
    "on" : true, //true, false 
    "bri" : 153,  //1~254 빛 밝기 
    "sat" : 200,  //0~254 색온도
    "hue" : 43690,//0~65500 색조 65500빨간색, 21845초록색, 43690파란색
    "ct" : 160   //153~500 흰색온도 ct모드에서만 사용
})
    
}, function(err, response, body) {
    var philips = JSON.parse(body);
    console.log(philips);
})