const chargingStations = 'ev-stations';



function mapStations(yearMin = 1970, yearMax = 2022) {
  d3.json(chargingStations).then(function(data) {
    console.log("map stations",data);

    // define tile layers.
    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Initialize all the LayerGroups that we'll use
    let layers = {
      TYPE_1: new L.LayerGroup(),
      TYPE_2: new L.LayerGroup(),
      DC_FAST: new L.LayerGroup()
    };
  
    // Create the map with layers
    let map = L.map("map", {
      center: [40.73, -74.0059],
      zoom: 12,
      layers: [
        layers.TYPE_1,
        layers.TYPE_2,
        layers.DC_FAST
      ]
    });

    // Add our "streetmap" tile layer to the map.
    streetmap.addTo(map);
  
    // Create an overlays object to add to the layer control.
    let overlays = {
      "EV Level 1 Chargers": layers.TYPE_1,
      "EV Level 2 Chargers": layers.TYPE_2,
      "EV DC Fast Chargers": layers.DC_FAST
    };

    // Create a control for our layers, and add our overlays to it.
    L.control.layers(null, overlays).addTo(map);
    // Arrays that will store the created charging station Markers by charging type
    let chargerType;

    for (let i = 0; i < stations.length; i++) {
      // loop through the data array, create a new marker, and push it to the appropriate layer (note a station may have more than one type)
      if( (stations[i][12] >= yearMin) && (stations[i][12] <= yearMax)){
        if(stations[i][5]>0){
          chargerType = 'TYPE_1';
        }
        if(stations[i][6]>0){
          chargerType = 'TYPE_2';
        }
        if(stations[i][7]>0){
          chargerType = 'DC_FAST';
        }
      }
      
      // Create a new marker with the appropriate icon and coordinates.
      let newMarker = L.marker([stations[i][9],stations[i][10]]);

      // Add the new marker to the appropriate layer.
      newMarker.addTo(layers[chargerType]);

      // Bind a popup to the marker that will  display on being clicked. This will be rendered as HTML.
      newMarker.bindPopup("<h1>" + stations[i][0] + "</h1><br><p>" + stations[i][1] + "</p><br><p>" + stations[i][2] + ", " + stations[i][3] + "<br>" + stations[i][4]);
            
    }    
  });
}

mapStations();