// Book Class: represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: handle UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Peter Pan',
                author: ' Barrie James Matthew',
                isbn: '123456'
            },
            {
                title: 'Alice in Wonderland',
                author: 'Carroll Lewis',
                isbn: '901221'
            }
        ];
        
        const books = StoredBooks;
        
        books.forEach((book)=> UI.addBookToList(book));
    }
    
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
        `;
        
        list.appendChild(row);
    }
    
    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
    
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class: hadles storage

// Events: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Events: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    
    // Prevent actual sumbit
    e.preventDefault();
    
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    
    // Validate
    if(title === '' || author === '' || isbn === '') {
       UI.showAlert('Please fill in all fields', 'danger');
       } else {
        // Instatiate book
        const book = new Book(title, author, isbn);

        // Add bookt to UI
        UI.addBookToList(book);
           
        // Show success message
        UI.showAlert('Book added', 'success');
           
        // Clear fileds
        UI.clearFields();    
       }
});

// Event: remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    
    // Show success message
    UI.showAlert('Book removed', 'success');       
});