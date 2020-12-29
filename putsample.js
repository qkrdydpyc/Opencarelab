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
    "bri" : 153,  //1~254 �� ��� 
    "sat" : 200,  //0~254 ���µ�
    "hue" : 43690,//0~65500 ���� 65500������, 21845�ʷϻ�, 43690�Ķ���
    "ct" : 160   //153~500 ����µ� ct��忡���� ���
})
    
}, function(err, response, body) {
    var philips = JSON.parse(body);
    console.log(philips);
})