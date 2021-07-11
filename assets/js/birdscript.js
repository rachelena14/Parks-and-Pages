


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



//dot notation to target image:
// volumeInfo
// imageLinks
// thumbnail


//"https://www.googleapis.com/books/v1/volumes?q="

// "http://books.google.com/books/content?id=fiawoQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"

var bookInfoEl = document.getElementById("book-info");
// var parkName = localStorage.getItem("parkName");
console.log(parkName);
var parkName = ["Glacier National Park", "Yosemite National Park", "Everglades National Park", "Yellowstone National Park"];
var apiKey = "AIzaSyBuygcz55NZNqqdLiTsxPF25wxml-ImFVw";
function getBooks(parkName) {
    for (let i = 0; i < parkName.length; i++) {
        var reqUrl = "https://www.googleapis.com/books/v1/volumes?q=" + parkName[i] + "&" + apiKey;
        fetch(reqUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (parkBooks) {
                console.log("park books", parkBooks.items[i]);
                displayBooks(parkBooks.items);
            })
    }
};
getBooks(parkName);
//use this function to append three books per park to the page
//need to dynamically create a header
function displayBooks(books) {
    console.log("searched books", books);
    for (let i = 0; i < 3; i++) {
        console.log("3 books", books);
        console.log("book titles", books.books[i].volumeInfo.title)
        var card = $("<div>").addClass("book-card")
        console.log(parkBooks.title);
        $(card).append(books.title)
        bookTitle = $(volumeInfo.title).text();

        $("#book-info").append(card);
    }
}

    //     var booksArray = parkBooks.map(el => {
    //         return {
    //             title: el.title,
    //             description: el.description,
    //             images: el.thumbnail
    //         }
    //     })
    //     console.log("map of books", booksArray);

    // booksArray.forEach(el => {
    //     var bookTile = document.createElement('article');

    //     bookTile.className = "bookTile";
    //     bookTile.setAttribute("class", "bookTileId");
    //     bookTile.textContent = el.title;
    //     bookInfoEl.appendChild(bookTile);
    // })}

