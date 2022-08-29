const api_key = '6f8152d7b99325ffe2be596042a07be4';
const my_lat = -19.45;
const my_lon = 29.8167;
//myurl2 = 'http://api.openweathermap.org/data/2.5/weather?q=Gweru,zw&APPID=6f8152d7b99325ffe2be596042a07be4';
const url= 'api.openweathermap.org/data/2.5/forecast?lat={'+my_lat+'}&lon={'+my_lon+'}&appid={'+api_key+'}';
fetch('http://api.openweathermap.org/data/2.5/weather?q=Gweru,zw&APPID=6f8152d7b99325ffe2be596042a07be4')
    .then(res => console.log(res))
    .then(res=>res)