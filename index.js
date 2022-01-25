console.log("This is index.js");

// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display ocnsturctor
function Display() {

}

// Add methods to display prototype 

Display.prototype.add = fucntion(book){
console.log("Adding to Ui") ;
tableBody = document.getElementById('tableBody') ;

let uiString = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>             
                `
    tableBody.innerHtml += uiString ;


}
// Implementing the clear fucntion 

Display.prototype.clear = function(){

        let libraryForm = document.getElementById('libraryForm') ;
        libraryForm.reset() ;

}

// Implementing the validiate function 
Display.prototype.validate = function(){

if(book.name.lenght <2 || book.author.lenght <2 ){
    return false ;
}
else{
    return true ;
}

}

Display.prototype.show = function(type, displaymessage){
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong>${displaymessage} You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
}


// Add submit event listener to libraryForm 
let libraryForm = document.getElementById('libaryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('you have sumiited library form');
    let name = document.getElementById('bookName')
    let author = document.getElementById('author');

    let fiction = document.getElementById('');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    let type;
    if (fiction.checked)
        type = fiction.value;
    else if (programming.checked)
        type = programming.value;
    else if (cooking.checked)
        type = cooking.value;


    let book = newBook(name, author, type);
    console.log(book) ;

    let display = new Display() ;
    if(display.validate(book)){
    display.add(book) ;
    display.clear() ;
    display.show('success', 'Your book has been succesffuly added') ;
    } 
    else{
        //show  error 
        display.show('danger', 'Sorry You cannot add this book') ;

    }


    e.preventDefault();
}