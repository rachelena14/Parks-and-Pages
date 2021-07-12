//html hook
var parkInfoEl = document.getElementById('park-info')

//save api key as variable
var apiKey = "Qf6SFqPGtrc0kdbIEzRDhmmEwqcd7bmuzohPeeam";
//set up empty arrays to use later
      var lat = [];
      var lon = []; 
      var parkNameArray = [];

      //gets input state from local storage and feeds to getParkData function
function storageGet(){
  //gets state from local storoage
   var searchInput = localStorage.getItem("state");
   getParkData(searchInput);
}

//uses input state to get info on national parks
function getParkData(stateName){


  //API call
    var queryUrl = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateName + "&api_key=" + apiKey;
      //fetches data from URL
    fetch(queryUrl)
        .then(function (response) {
          //if 200 comes back, go on
          if (response.ok) {
            //converts to JSON
            response.json()
            .then(function(parks) {

              //maps data that comes back and saves certain info to an array
              var parksArray = parks.data.map(el => {
                return {
                  //retuns certain data elements
                  fullName: el.fullName,
                  latitude: el.latitude,
                  longitude: el.longitude,
                  images: el.images
                }
              })
  
              //for each park in array, create tile
               parksArray.forEach(el => {

                var tile = document.createElement('article');
                
                tile.className = 'tile';
                tile.setAttribute("class", "tileId");
                //if there is an image in the element, create background image tile
                if(el.images[0]){
                  tile.style.backgroundImage = 'url(' + el.images[0].url + ')'
                }
                //styles park name
                tile.textContent = el.fullName || 'Unknown'
                tile.style.color = 'white'
                tile.style.fontWeight = 'bolder';

                //appends to page
                parkInfoEl.appendChild(tile)

              })
//for each park, push items to empty arrays
            for (var i = 0; i < parks.data.length; i++){
              parkNameArray.push(parks.data[i].fullName);
              lat.push(parks.data[i].latitude);
              lon.push(parks.data[i].longitude);

           }

      //saves items to local storage
            localStorage.setItem("parkName", JSON.stringify(parkNameArray));
            localStorage.setItem("latitude", JSON.stringify(lat));
            localStorage.setItem("longitude", JSON.stringify(lon)); 
          
            });
        }})
        //catches errors
        .catch(function (error) {
          console.log(error);
        });
    
      }
      
//calls function
      storageGet();