//check local storage is empty then create an empty array
if (localStorage.getItem('Added Books') == null) {
    localStorage.setItem('Added Books', JSON.stringify([]));
}

//store data in local storage
const storeData = JSON.parse(localStorage.getItem('Added Books'));

function updateData() {
    localStorage.setItem('Added Books', JSON.stringify(storeData));
}

//Pull values from the form
const form = document.querySelector('form');
form.addEventListener('submit', (e) =>{
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  e.preventDefault();
  addNewData(title.value, author.value);
});

function createBooks(arr) {
  let books = '';
  for (let i = 0; i < arr.length; i++) {
    books += `
      <p>${arr[i].title}</p>
      <p>${arr[i].author}</p>
      <button onclick="removeBook(${i})">Remove</button>
      <hr/>
    `;
  }
  return books;
}

//Dispaly books in the table
function displayBooks() {
  const listOfBooks = document.querySelector('.container');
  listOfBooks.innerHTML = `
             <ul class="book-ul"/>
              ${createBooks(storeData)}</ul>
  `
};

//Add new book to the list
function addNewData(title, author) {
  const newBook = {
    title: title,
    author: author
  };
  storeData.push(newBook);
  updateData();
  displayBooks();
}