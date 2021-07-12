//HTML hooks
var searchButton = document.querySelector("#search-btn");

//adds click handler to search button
  searchButton.addEventListener('click', function(event){
    //query selector for each state code value
    var stateName = document.querySelector("#tags").value;
    //sets state to local storage
    localStorage.setItem("state", stateName);
})
