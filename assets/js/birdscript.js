//API Key to request information from eBird API
// var apiKey = "k9s1kdn0ee6g";
// var myHeaders = new Headers();

// myHeaders.append("X-eBirdApiToken", "k9s1kdn0ee6g");
// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };
// fetch("https://api.ebird.org/v2/data/obs/KZ/recent", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error))
//   ;

// //this will save the searched birds to local storage
// if (birds.indexOf(birdSearch) === -1) {
//   birds.push(birdSearch);//push each search to localstorage "birds" array
//   window.localStorage.setItem("birds", JSON.stringify(birds));//this will add a search history row by search input
//   addBirds(birdSearch);
// }
// ;

// function getLatLon() {
//   var lat = localStorage.getItem("latitude");
//   var lon = localStorage.getItem("longitude");
//   var reqUrl = "https://api.ebird.org/v2/data/obs/geo/recent?lat=" + lat + "&lng=" + lng;
// console.log(lat, lon);
// }

// function displayBirds() {
//   // on page load get history from local storage, if nothing, leave as empty array
//   birds = JSON.parse(window.localStorage.getItem("birds")) || [];

//   //this directs page to display searches if they exist 
//   if (birds.length > 0) {
//     birdData(birds[birds.length - 1]);
//   }

//   for (var i = 0; i < birds.length; i++) {
//     addBirds(birds[i]);
//   }
// }

