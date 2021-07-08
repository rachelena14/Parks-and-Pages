//HTML hooks
var searchButton = document.querySelector("#search-btn");
var stateCode = "AK";
//var stateCode = document.querySelector(".state").value;

//API key and URL saved to variables
var apiKey = "Qf6SFqPGtrc0kdbIEzRDhmmEwqcd7bmuzohPeeam";
var queryUrl = "https://developer.nps.gov/api/v1/parks?q=" + stateCode + "&api_key=" + apiKey;

//searches Parks using input search value
function search(){
    
  //calls data fetch
    getParkData(stateCode);
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
          //logs park data
          console.log(parks);
          //grabs parks by state code
          console.log(parks.data.addresses[0].stateCode);
          
        });
    }})
    //catches errors
    .catch(function (error) {
      console.log(error);
    });

  }
//search button click
    searchButton.addEventListener('click', search());
    //for index.html
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('select');
    //   var instances = M.FormSelect.init(elems, options);
    // });