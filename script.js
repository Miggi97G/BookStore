function renderBooks() {
 // getLocalStorage();
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = "";

  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    const book = books[indexBook];
      contentRef.innerHTML += getBookTemplate(book, indexBook);
  }
}

function getBookTemplate(book, indexBook) {
  return `
    <div class="bookContent">
    <div class="bookTitle">${book.name}</div>
    <div class="bookAuthor">${book.author}</div>
    <div class="bookLikes">${book.likes}</div>
    <div class="bookLiked">${book.liked}</div>
    <div class="bookPrice">${book.price}</div>
    <div class="bookPublishedYear">${book.publishedYear}</div>
    <div class="bookGenre">${book.genre}</div>
    <div class="bookComments">${book.comments}</div>
    </div>
  `;
 }