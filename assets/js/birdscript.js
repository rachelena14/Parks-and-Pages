
// //once array or obj is made, lines 7 & 8 will need || [] 
// var lat = localStorage.getItem("latitude") || []
// var lng = localStorage.getItem("longitude") || []
// console.log(lat, lng);

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


// function getregSpecies() {
//   var locId = "L6208778";
//   var speciesCode = "cangoo";
//   fetch("https://api.ebird.org/v2/data/obs/" + locId + "/recent/" + speciesCode)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error))
//   ;
// }
// getregSpecies();

// // getLatLon(lat, lng) {

// //   var reqUrl = "https://api.ebird.org/v2/data/obs/geo/recent?lat=" + lat + "&lng=" + lng + "&sort=species";
// //   fetch(reqUrl, requestOptions)
// //   .then(function (response) {
// //     //if 200 comes back, go on
// //     if (response.ok) {
// //       //converts to JSON
// //       response.json()
// //       .then(function(response) {
// //     console.log(response);
// //       });
// //   }})
// // getLatLon(43.53, 79.45);


//remind Rachel P to set local storage item to park-name
// var parkName = JSON.parse(localStorage.getItem("park-name"))
// var parkName = ["Glacier National Park", "Yosemite National Park", "Everglades National Park", "Yellowstone National Park"];
// var apiKey = "AIzaSyBuygcz55NZNqqdLiTsxPF25wxml-ImFVw";
// var bookImages = JSON.parse(localStorage.getItem("book-images"));

// function getBooks() {
//     for (let i = 0; i < parkName.length; i++) {
//         var reqUrl = "https://www.googleapis.com/books/v1/volumes?q=" + parkName[i] + "&" + apiKey;
//         fetch(reqUrl)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (parkBooks) {
//                 console.log(parkBooks.items[i]);
//                 displayBooks(parkBooks.items);
//             })
//     }
// };
// getBooks();

//this function appends three books per park to the page
//dynamically creates a header
// var parkBooks = JSON.parse(localStorage.getItem("thumbnail"))
// function displayBooks(books) {
//     for (let i = 0; i < 3; i++) {
//         var imgUrl = "https://www.googleapis.com/v1/volumes/volumeInfo?" + apiKey;
//         fetch(imgUrl)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (parkBooks) {
//                 console.log(books[i]);
//                 console.log(parkBooks.items.volumeInfo.imageLinks.thumbnail[i]);
//                 })
//     }
//     displayBooks(books.volumeInfo.thumbnail);
// }

// var card = $("<div>").addClass("book-card")
// $(card).append(parkBooks)
// $("#book-graphic").append(card);

//dot notation to target image:
// volumeInfo
// imageLinks
// thumbnail


//"https://www.googleapis.com/books/v1/volumes?q="

// "http://books.google.com/books/content?id=fiawoQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"


//this is what we did with Dan on Fri

var parkName = localStorage.getItem("parkName")
console.log(parkName);
// var parkName = ["Glacier National Park", "Yosemite National Park", "Everglades National Park", "Yellowstone National Park"];
var apiKey = "AIzaSyBuygcz55NZNqqdLiTsxPF25wxml-ImFVw";
function getBooks() {
    for (let i = 0; i < parkName.length; i++) {
        var reqUrl = "https://www.googleapis.com/books/v1/volumes?q=" + parkName[i] + "&" + apiKey;
        fetch(reqUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (parkBooks) {
                console.log(parkBooks.items[i]);
                displayBooks(parkBooks.items);
                var booksArray = parkBooks.data.map(el => {
                    return {
                        title: el.title,
                        description: el.description,
                        images: el.thumbnail
                    }
                })
                console.log("map of books", booksArray);
            }
            )};
    getBooks();
    //use this function to append three books per park to the page
    //need to dynamically create a header
    function displayBooks(books) {
        console.log(books);
        for (let i = 0; i < 3; i++) {
            console.log(books[i]);
        }
}}
