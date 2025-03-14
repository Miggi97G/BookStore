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
    <div class="book_content">
    <div class="bookTitle"><h1>${book.name}</h1></div>
    <div class="imgContent"><img src="./img/book.jpeg" alt=""></div>
    <div class="bookPrice"><h2><p>Price ${book.price}</p></h2>Likes${book.likes}</div>
    <div class="bookAuthor">
    <p>${book.author}</p>
    <p>${book.genre}</p>
    <p>${book.publishedYear}</p>
    </div>
    <div class="bookLikes"></div>
    <div class="bookLiked">${book.liked}</div>
    <div class="bookComments">${book.comments}</div>
    </div>
  `;
 }