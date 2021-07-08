//HTML hooks
var searchButton = document.querySelector("#search-btn");

//API key and URL saved to variables
var apiKey = "Qf6SFqPGtrc0kdbIEzRDhmmEwqcd7bmuzohPeeam";

//fetches park data
function getParkData(stateName) {
  var queryUrl = "https://developer.nps.gov/api/v1/parks?q=" + stateName + "&api_key=" + apiKey;
  //fetches data from URL
  fetch(queryUrl)
    .then(function (response) {
      //if 200 comes back, go on
      if (response.ok) {
        //converts to JSON
        response.json()
          .then(function (parks) {
            //logs park data
            console.log(parks);
            //grabs parks by state code
          });
      }
    })
    //catches errors
    .catch(function (error) {
      console.log(error);
    });
}
//search button click
searchButton.addEventListener('click', function (event) {
  // var stateName = event.target.value;
  var stateName = document.querySelector("#tags").value;
  getParkData(stateName);
})

function displayParks() {
  parkInfo.innerHTML = parks.data

}