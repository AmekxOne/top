let modal = document.getElementById("modal");
let btn = document.querySelector("#btn");
let test = document.querySelector("#test");
let library = document.querySelector("#library")


let submitBook = document.getElementById("submit-book");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

btn.addEventListener("click", () => {
    modal.classList.toggle('hidden');
})

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.toggle('hidden');
    }
})

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


const allBooks = [
    {
        author: "a",
        title: "a",
        pages: 123,
        read: true
    }
];

//add new book to allBooks array
submitBook.addEventListener("click", () => {
    const book = new Book (title.value, author.value, pages.value, read.checked);
    
    let checker = 0;

    for(let i=0; i<allBooks.length; i++){
        if(title.value === allBooks[i].title && author.value === allBooks[i].author){
            checker += 1;
            break;
        }
    }

    if(checker < 1){
        allBooks.push(book);
    }

    let parentDiv = document.createElement("div");
    parentDiv.classList.add("book");

    let bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    parentDiv.append(bookContainer);

    let titleContainer = document.createElement("div");
    bookContainer.append(titleContainer);

    let titleOfBook = document.createElement("p");
    titleOfBook.classList.add("container-title");
    titleOfBook.innerText = title.value;
    titleContainer.append(titleOfBook);

    let authorContainer = document.createElement("div");
    bookContainer.append(authorContainer);
    
    let authorOfBook = document.createElement("p");
    authorOfBook.classList.add("container-author");
    authorOfBook.innerText = author.value;
    authorContainer.append(authorOfBook);

    let pagesContainer = document.createElement("div");
    bookContainer.append(pagesContainer);
    
    let numberOfPages = document.createElement("p");
    numberOfPages.classList.add("container-author");
    numberOfPages.innerText = pages.value;
    pagesContainer.append(numberOfPages);


    library.append(parentDiv);
})