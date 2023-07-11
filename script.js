const form = document.querySelector('.add-form');
const bookList = document.querySelector('.book-list');

// BookStorage class

class BookStorage {
    data = []

    addData(book) {
      this.data.push(book);
    }

    removeData(id) {
      this.data = this.data.filter((book) => book.id !== id);
      console.log(this.data);
      this.displayData();

      // console.log(this.data[id].id);
    }

    displayData() {
      let idBook = 0;
      bookList.innerHTML = '';
      this.data.forEach((element) => {
        element.id = idBook;
        bookList.innerHTML += `<li class="list-item">
                                    <p>${element.bookTitle}</p>
                                    <p>${element.bookAuthor}</p>
                                    <button class="delete" data-id="${element.id}">Remove</button>
                                    <hr/>
                                    </li>
    `;
        idBook += 1;
      });
    }

    createBook(tit, bAuth) {
      const book = {
        id: 0,
        bookTitle: tit,
        bookAuthor: bAuth,
      };
      this.addData(book);
    }
}

// Book class

// class Book {
//     constructor(bookTitle, bookAuthor){
//         this.id
//         this.bookTitle = bookTitle
//         this.bookAuthor = bookAuthor
//     }

// }
// Creating data storage
const storage = new BookStorage();

// Button listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');

  // let b = new Book(title.value, author.value)
  storage.createBook(title.value, author.value);
  storage.displayData();
});

bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const id = parseInt(event.target.dataset.id, 10);
    storage.removeData(id);
  }
});
