const api_key = '6f8152d7b99325ffe2be596042a07be4'; //My API_Key from openweathermap
const my_lat = -19.45;//Lattitude
const my_lon = 29.8167; //Longitude
myurl2 = 'http://api.openweathermap.org/data/2.5/weather?q=Gweru,zw&APPID='+api_key; //access current weather updates
const url= 'http://api.openweathermap.org/data/2.5/forecast?lat='+my_lat+'&lon='+my_lon+'&APPID='+api_key; //access 4 hour forecasts
fetch(url)
    .then(res => res.json()) //get a response and convert to json object
    .then(data=> console.log(data)) //data then displayed
.catch(err => console.log(err)) //catch error

