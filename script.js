function renderBooks() {
  // getLocalStorage();
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = "";

  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    const book = books[indexBook];
    contentRef.innerHTML += getBookTemplate(book, indexBook);
    renderComments(indexBook);
  }
}

function getBookTemplate(book, indexBook) {
  return `
    <div class="book_content">
    <div class="bookTitle"><h1>${book.name}</h1></div>
    <div class="imgContent"><img src="./img/book.jpeg" alt=""></div>
    <div class="bookPrice"><h2><p>Price ${book.price}€</p></h2>Likes${book.likes}</div>
    <div class="bookAuthor">
    <p>${book.author}</p>
    <p>${book.genre}</p>
    <p>${book.publishedYear}</p>
    </div>
    <div class="bookLikes"></div>
    <div class="bookLiked">${book.liked}</div>
    <div id="comments-${indexBook}" class="bookComments">book.comments</div>
    </div>
  `;
}

function renderComments(indexBook) {
  const comments = books[indexBook].comments;
  const commentsContainer = document.getElementById(`comments-${indexBook}`);
  commentsContainer.innerHTML = "";

  for (let commentsIndex = 0; commentsIndex < comments.length; commentsIndex++) {
    commentsContainer.innerHTML += `
    <div class="commentsContent">
      <div class="commentContent">
        <h3>${comments[commentsIndex].name}</h3>
        <p>${comments[commentsIndex].comment}</p>
      </div>
    </div>`;
  }
}

function like(indexBook) {
  const like = books[indexBook].liked;

}