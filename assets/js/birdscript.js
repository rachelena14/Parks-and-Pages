
var booksEl = document.getElementById("books");
var parkName = JSON.parse(localStorage.getItem("parkName"));
var apiKey = "AIzaSyBuygcz55NZNqqdLiTsxPF25wxml-ImFVw";


function getBooks() {

  // loop through parknames and search for books that contain park name
  for (let i = 0; i < parkName.length; i++) {

    var reqUrl = "https://www.googleapis.com/books/v1/volumes?q=" + parkName[i] + "&" + apiKey;

    fetch(reqUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (parkBooks) {
        //  if there are results then continue
        if (parkBooks.items) {
          // get first three results for each park
          for (let i = 0; i < 3; i++) {
            // create cards with book info and append to page
            //creates new div
            var bookCard = document.createElement("div");
            //sets class to create columns
            bookCard.setAttribute("class", "s6 col books");
            //creates header variable
            var title = document.createElement("h6");
            //creates button
            var button = document.createElement("button");
            //styles button
            button.setAttribute("class", "btn-floating waves-effect waves-light red saveBtn");
            //sets title 
            button.setAttribute("data-title", parkBooks.items[i].volumeInfo.title);
            button.textContent = "Add to Favorites";
            title.textContent = parkBooks.items[i].volumeInfo.title;
            bookCard.append(title);

            // not all book returns have images and or desc so this checks to make sure there is one before adding to page

            if (parkBooks.items[i].volumeInfo.imageLinks.thumbnail) {
              button.setAttribute("data-image", parkBooks.items[i].volumeInfo.imageLinks.thumbnail);
              var image = document.createElement("img");
              var imageSrc = parkBooks.items[i].volumeInfo.imageLinks.thumbnail;
              image.setAttribute("src", imageSrc);
              bookCard.append(image);
            }

            if (parkBooks.items[i].volumeInfo.description) {
              button.setAttribute("data-desc", parkBooks.items[i].volumeInfo.description);
              var description = document.createElement("p");
              description.textContent = parkBooks.items[i].volumeInfo.description;
              bookCard.append(description);
            }

            // add to favorites button and append the whole card to page
            button.addEventListener("click", saveBook);
            bookCard.append(button);
            booksEl.append(bookCard);

          }

        }
      }
      )
  };
}
// function that saves books
function saveBook(event) {
  event.preventDefault();
  // add empty array for saved books to be stored
  var favorites = [];
  // first check to see if there are any previously saved books, if there are add them to array
  var storedBooks = JSON.parse(localStorage.getItem("favorite-books"));
  if (storedBooks) {
    for (let index = 0; index < storedBooks.length; index++) {
      favorites.push(storedBooks[index]);
    }
  }

  // get book info from add button, and create an object for each seperate book
  var bookTitle = event.target.getAttribute("data-title");
  var bookDesc = event.target.getAttribute("data-desc");
  var bookImg = event.target.getAttribute("data-image");
  //book object
  var bookObj = {
    "title": bookTitle,
    "desc": bookDesc,
    "img": bookImg
  }
//pushes entire book object to array
  favorites.push(bookObj);
//sets local storage to stringified array
  localStorage.setItem("favorite-books", JSON.stringify(favorites));
}

//gets books
getBooks();

