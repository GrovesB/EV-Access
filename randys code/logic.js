//creating map object
//set long/lat/and zoom level
//inserted to the div with id of "map"
let myMap = L.map('map', {
    center: [37.09, -95.71],
    zoom: 5
});

//add tile layer (background image)
//use addTo() method to add object to map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

var marker = L.marker([34.24, -118.38]).addTo(myMap);
var marker = L.marker([34.05, -118.45]).addTo(myMap);
var marker = L.marker([34.04, -118.27]).addTo(myMap);
var marker = L.marker([34.06, -118.25]).addTo(myMap);
var marker = L.marker([33.76, -118.10]).addTo(myMap);