//HTML hooks
var searchButton = document.querySelector(".searchBtn");
var stateCode = "AK"; 

//API key and URL saved to variables
var apiKey = "Qf6SFqPGtrc0kdbIEzRDhmmEwqcd7bmuzohPeeam";
var queryUrl = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateCode + "&api_key=" + apiKey;

//searches Parks using input search value
function search(){
    //lowercase trimmed search input value
    var stateValue = document.querySelector("#search-val").value.trim().toLowerCase();
  //calls data fetch
    getParkData(stateValue);
}

//fetches park data
function getParkData(){

  //fetches data from URL
fetch(queryUrl)
    .then(function (response) {
      //if 200 comes back, go on
      if (response.ok) {
        //converts to JSON
        response.json()
        .then(function(parks) {
          //logs put data
          console.log(parks);
          //console.log(parks.data[0].addresses[0].postalCode);
          
        });
    }})
    .catch(function (error) {
      console.log(error);
    });

  }
//search button click
    searchButton.addEventListener('click', search());
