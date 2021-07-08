var apiKey = "Qf6SFqPGtrc0kdbIEzRDhmmEwqcd7bmuzohPeeam";
      var lat = [];
              var lon = []; 
function storageGet(){
   var searchInput = localStorage.getItem("state");
   console.log(searchInput);
   getParkData(searchInput);
}


function getParkData(stateName){

    var queryUrl = "https://developer.nps.gov/api/v1/parks?q=" + stateName + "&api_key=" + apiKey;
      //fetches data from URL
    fetch(queryUrl)
        .then(function (response) {
          //if 200 comes back, go on
          if (response.ok) {
            //converts to JSON
            response.json()
            .then(function(parks) {
       
             
            for (var i = 0; i < parks.data.length; i++){
        
              lat.push(parks.data[i].latitude);
              lon.push(parks.data[i].longitude);

              //console.log(lat);
              //console.log(lon);
           }
           
            localStorage.setItem("latitude", lat);
            localStorage.setItem("longitude", lon);
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