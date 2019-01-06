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
}

// Store Class: hadles storage

// Events: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Events: add a book

// Event: remove a book
