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
    
    <div class="bookPrice"><h2><p>Price ${book.price}€</p></h2>
    <div class="likeCount"><span class="material-symbols-outlined">
    favorite</span>${book.likes}</div>
    </div>

    <div class="bookAuthor">
    <p>Author: ${book.author}</p>
    <p>Genre: ${book.genre}</p>
    <p>Veröffentlichung: ${book.publishedYear}</p>
    </div><button class="likeButton" onclick="like(${indexBook})">Like</button>
    <div class="bookLikes"></div>

    <div class="addComment">
    <input type="text" id="commentName-${indexBook}" placeholder="Name">
    <input type="text" id="commentText-${indexBook}" placeholder="Kommentar">
    <button onclick="addComment(${indexBook})">Kommentar hinzufügen</button>
    </div>
    
    <div id="comments-${indexBook}" class="bookComments">book.comments</div>
    </div>
  `;
}

// <div class="bookLiked">${book.liked}</div> 

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

function addComment(indexBook) {
  const commentName = document.getElementById(`commentName-${indexBook}`).value;
  const commentText = document.getElementById(`commentText-${indexBook}`).value;
  
  if (commentName && commentText) {
    books[indexBook].comments.push({ name: commentName, comment: commentText });
    renderComments(indexBook);
    document.getElementById(`commentName-${indexBook}`).value = "";
    document.getElementById(`commentText-${indexBook}`).value = "";
    
  } else {
    alert("Gib ein KOmmentar ein");
  }
}

function like(indexBook) {
  const like = books[indexBook].liked;
  if (like) {
    books[indexBook].liked = false;
    books[indexBook].likes--;
  } else {
    books[indexBook].liked = true;
    books[indexBook].likes++;
  }
  renderBooks();
}
