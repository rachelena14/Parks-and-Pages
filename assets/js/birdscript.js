var booksEl = document.getElementById("books");
var parkName = JSON.parse(localStorage.getItem("parkName"));
// var parkName = ["Glacier National Park", "Yosemite National Park", "Everglades National Park", "Yellowstone National Park"];
var apiKey = "AIzaSyBuygcz55NZNqqdLiTsxPF25wxml-ImFVw";

function getBooks() {
  // console.log("hello");

  for (let i = 0; i < parkName.length; i++) {

    var reqUrl = "https://www.googleapis.com/books/v1/volumes?q=" + parkName[i] + "&" + apiKey;

    fetch(reqUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (parkBooks) {
        console.log(parkName[i]);
        if (parkBooks.items) {

          for (let i = 0; i < 3; i++) {

            var bookCard = document.createElement("div");
            bookCard.setAttribute("class", "s6 col");
            var title = document.createElement("h4");
            var button = document.createElement("button");
            button.setAttribute("class", "btn-floating waves-effect waves-light red saveBtn");
            button.setAttribute("data-title", parkBooks.items[i].volumeInfo.title);
            button.textContent = "Add to Favorites";
            title.textContent = parkBooks.items[i].volumeInfo.title;
            bookCard.append(title);

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

            bookCard.append(button);
            booksEl.append(bookCard);

          }

        }
      }
      )
  };
}

getBooks();