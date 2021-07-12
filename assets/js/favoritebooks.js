// hook into book element in favbook.html
var booksEl = document.getElementById("books");

// get array of objects from local storage and turn into cards to append to page
function getFavorites (){
var storedBooks = JSON.parse(localStorage.getItem("favorite-books"))
// check to see if there are existing saved books
if (storedBooks) {
// loop through saved books and add to the page
    for (let index = 0; index < storedBooks.length; index++) {
      //creates div
      var bookCard = document.createElement("div");
      //sets class of new div
      bookCard.setAttribute("class", "s12 m4 col bookCard");
      //creates header
      var title = document.createElement("h4");
      //adds stored book title as text content
      title.textContent = storedBooks[index].title;
      //appends to page
      booksEl.append(bookCard);

      if (storedBooks[index].img) {
        //creates img tag
        var image = document.createElement("img");
         //adds stored book image as new var
        var imageSrc = storedBooks[index].img;
        //sets source of image
        image.setAttribute("src", imageSrc);
        //appends to page
        bookCard.append(image);
      }

      bookCard.append(title);

      if (storedBooks[index].desc) {
        //creates p tag
        var description = document.createElement("p");
        //adds stored book description to text content of description
        description.textContent = storedBooks[index].desc;
        //appends to page
        bookCard.append(description);
      }
    }
  }
}
//gets favorites
getFavorites();