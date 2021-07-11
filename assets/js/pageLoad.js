var parkInfoEl = document.getElementById('park-info')

var apiKey = "Qf6SFqPGtrc0kdbIEzRDhmmEwqcd7bmuzohPeeam";
      var lat = [];
      var lon = []; 
      var parkNameArray = [];
function storageGet(){
   var searchInput = localStorage.getItem("state");
   console.log(searchInput);
   getParkData(searchInput);
}

function getParkData(stateName){

    var queryUrl = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateName + "&api_key=" + apiKey;
      //fetches data from URL
    fetch(queryUrl)
        .then(function (response) {
          //if 200 comes back, go on
          if (response.ok) {
            //converts to JSON
            response.json()
            .then(function(parks) {

              console.log('PARKS OBJECT --> ', parks.data)

              var parksArray = parks.data.map(el => {
                return {
                  fullName: el.fullName,
                  latitude: el.latitude,
                  longitude: el.longitude,
                  images: el.images
                }
              })

               console.log(parksArray);
  
               parksArray.forEach(el => {

                var tile = document.createElement('article');
                
                tile.className = 'tile';
                tile.setAttribute("class", "tileId");
                if(el.images[0]){
                  tile.style.backgroundImage = 'url(' + el.images[0].url + ')'
                }
                tile.textContent = el.fullName || 'Unknown'
                tile.style.color = 'white'
                tile.style.fontWeight = 'bolder';

                parkInfoEl.appendChild(tile)

              })

            for (var i = 0; i < parks.data.length; i++){
              parkNameArray.push(parks.data[i].fullName);
              lat.push(parks.data[i].latitude);
              lon.push(parks.data[i].longitude);

           }

              // console.log(lat);
              // console.log(lon);
           console.log(parkNameArray);
            localStorage.setItem("parkName", JSON.stringify(parkNameArray));
            localStorage.setItem("latitude", JSON.stringify(lat));
            localStorage.setItem("longitude", JSON.stringify(lon));
              //displayParks(parks);
              
              //logs park data
             // console.log(parks);  
          
            });
        }})
        //catches errors
        .catch(function (error) {
          console.log(error);
        });
    
      }

      storageGet();