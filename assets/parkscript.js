//HTML hooks
var searchButton = document.querySelector(".searchBtn");
var stateCode = "AK";

//API key and URL saved to variables
var apiKey = "Qf6SFqPGtrc0kdbIEzRDhmmEwqcd7bmuzohPeeam";
var queryUrl = "https://developer.nps.gov/api/v1/parks?q=" + stateCode + "&api_key=" + apiKey;

//searches Parks using input search value
function search() {
  //lowercase trimmed search input value
  var stateValue = document.querySelector("#search-val").value.trim().toLowerCase();
  //calls data fetch
  getParkData(stateValue);
}

//fetches park data
function getParkData() {

  //fetches data from URL
  fetch(queryUrl)
    .then(function (response) {
      //if 200 comes back, go on
      if (response.ok) {
        //converts to JSON
        response.json()
          .then(function (parks) {
            //logs put data
            console.log(parks);
            //console.log(parks.data[0].addresses[0].postalCode);
            $( function() {
              var stateCodes = [
                "AK",
                "AL",
                "AZ",
                "AR",
                "CA",
                "CO",
                "CT",
                "DE",
                "FL",
                "GA",
                "HI",
                "ID",
                "IL",
                "IN",
                "IA",
                "KS",
                "KY",
                "LA",
                "ME",
                "MD",
                "MA",
                "MI",
                "MN",
                "MS",
                "MO",
                "MT",
                "NE",
                "NV",
                "NH",
                "NJ",
                "NM",
                "NY",
                "NC",
                "ND",
                "OH",
                "OK",
                "OR",
                "PA",
                "RI",
                "SC",
                "SD",
                "TN",
                "TX",
                "UT",
                "VT",
                "VA",
                "WA",
                "WV",
                "WI",
                "WY",
                "Scheme"
              ];
              $( "#states" ).autocomplete({
                source: stateCodes
              });
            } );
          });
      }
    })
    .catch(function (error) {
      console.log(error);
    });

}
//search button click
// searchButton.addEventListener('click', search());

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('select');
//   var instances = M.FormSelect.init(elems, options);
// });

