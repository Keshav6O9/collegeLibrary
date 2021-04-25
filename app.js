//constructor
class Book {
    constructor(name, author, genre) {
        this.name = name;
        this.author = author;
        this.genre = genre;
    }
}


class Display {
   
    //Add methods to display prototype
    add(book) {
        let tableBody = document.getElementById("tableBody");
        let uiString = ` <tr>
        
                     <td>${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.genre}</td>
                     </tr >  `;

        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2)
            return false;

        else
            return true;
    }
    show(type, message) {
        let msg = document.getElementById('msg');
        msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> ${message}.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;

        setTimeout(() => {
            msg.innerHTML = "";
        }, 1000);
    }
}


// add submit event listener to form libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();


    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

   

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','your book has been successfully added');
    }
    else{
        display.show('danger','you cannot add this book');
    }
   

}
