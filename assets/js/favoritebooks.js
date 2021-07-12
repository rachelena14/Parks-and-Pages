// hook into book element in favbook.html
var booksEl = document.getElementById("books");

// get array of objects from local storage and turn into cards to append to page
function getFavorites (){
var storedBooks = JSON.parse(localStorage.getItem("favorite-books"))
// check to see if there are existing saved books
if (storedBooks) {
// loop through saved books and add to the page
    for (let index = 0; index < storedBooks.length; index++) {
      var bookCard = document.createElement("div");
      bookCard.setAttribute("class", "s12 m4 col bookCard");
      var title = document.createElement("h4");
      title.textContent = storedBooks[index].title;
      booksEl.append(bookCard);

      if (storedBooks[index].img) {
        var image = document.createElement("img");
        var imageSrc = storedBooks[index].img;
        image.setAttribute("src", imageSrc);
        bookCard.append(image);
      }

      bookCard.append(title);

      if (storedBooks[index].desc) {
        var description = document.createElement("p");
        description.textContent = storedBooks[index].desc;
        bookCard.append(description);
      }
    }
  }
}

getFavorites();