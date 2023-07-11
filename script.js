const form = document.querySelector('.add-form');
const bookList = document.querySelector('.book-list');
const remove = document.querySelector('.remove')

// BookStorage class

class BookStorage {
    constructor(){
        this.data = []
    }

    addData(book){
        this.data.push(book)
    }

    removeData(id){
        this.data = this.data.filter(book => book.id != id);
        console.log(this.data);
        this.displayData()
        
        console.log(this.data[id].id);
    }

    displayData(){
        let idBook = 0
        bookList.innerHTML = ``;
        this.data.forEach(element =>  {
            element.id = idBook
            bookList.innerHTML += `<li class="list-item">
                                    <p>${element.bookTitle}</p>
                                    <p>${element.bookAuthor}</p>
                                    <button class="delete" data-id="${element.id}">Remove</button>
                                    <hr/>
                                    </li>
    `
    idBook++;
        });
    }
}

// Book class

class Book {
    constructor(bookTitle, bookAuthor){
        this.id
        this.bookTitle = bookTitle
        this.bookAuthor = bookAuthor
    }

}
// Creating data storage
let storage = new BookStorage()
