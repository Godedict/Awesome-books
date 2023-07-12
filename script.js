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
      this.displayData();
    }

    displayData() {
      let idBook = 0;
      bookList.innerHTML = '';
      this.data.forEach((element) => {
        element.id = idBook;
        bookList.innerHTML += `<li class="list-item">
                                    <div class="title-container">
                                    <p id="titlep">${element.bookTitle}</p>
                                    <p id="authorp">by ${element.bookAuthor}</p>
                                    </div>
                                    <div class= "button-container">
                                    <button class="delete" data-id="${element.id}">Remove</button>
                                    </div>
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

const storage = new BookStorage();

// Button listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');

  storage.createBook(title.value, author.value);
  storage.displayData();
});

bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const id = parseInt(event.target.dataset.id, 10);
    storage.removeData(id);
  }
});

// Function to display date

const date = document.querySelector('.date');
const displayDate = () => {
  date.textContent = new Date().toLocaleString();
};
setInterval(displayDate, 1000);

document.addEventListener('DOMContentLoaded', () => {
  const listLink = document.querySelector('#list-link');
  const addNewLink = document.querySelector('#add-new-link');
  const contactLink = document.querySelector('#contact-link');
  const listSection = document.querySelector('.container-list');
  const addBookSection = document.querySelector('.div-form');
  const contactSection = document.querySelector('.contact');

  listLink.addEventListener('click', () => {
    listSection.classList.remove('hide');
    addBookSection.classList.add('hide');
    contactSection.classList.add('hide');
    listSection.classList.remove('container-list');
  });

  addNewLink.addEventListener('click', () => {
    listSection.classList.add('hide');
    addBookSection.classList.remove('hide');
    contactSection.classList.add('hide');
    listSection.classList.remove('container-list');
  });

  contactLink.addEventListener('click', () => {
    listSection.classList.add('hide');
    addBookSection.classList.add('hide');
    contactSection.classList.remove('hide');
    listSection.classList.remove('container-list');
  });
});
