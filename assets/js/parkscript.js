//HTML hooks
var searchButton = document.querySelector("#search-btn");

  searchButton.addEventListener('click', function(event){
    //var stateName = event.target.value;
    var stateName = document.querySelector("#tags").value;
    localStorage.setItem("state", stateName);
    //gets weather from button value
  
})
