//HTML hooks
var searchButton = document.querySelector("#search-btn");
//var state = "Alaska";
//API key and URL saved to variables
//var parkInfo = document.querySelector("#park-info");

//searches Parks using input search value
// function search(){
    
//   //calls data fetch
//     getParkData(state);
// }

//fetches park data


// function displayParks(event, parks){
// event.preventDefault();
// parkInfo.innerHTML = parks.data;

// }

//search button click
  //   searchButton.addEventListener("click", function(event) {
  //     search();
  // });

  searchButton.addEventListener('click', function(event){
    //var stateName = event.target.value;
    var stateName = document.querySelector("#tags").value;
    localStorage.setItem("state", stateName);
    //gets weather from button value

  
})
    //for index.html
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('select');
    //   var instances = M.FormSelect.init(elems, options);
    // });