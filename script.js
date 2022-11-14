//import bookList from "./bookspack";
"use strict";

const bookList = [
  {
    id: 1,
    author: "Charles Dickens",
    title: "Oliver Twist",
  },
  {
    id: 2,
    author: "William Shakespear",
    title: "Hamlet",
  },
];

/* Hur man kommer in i dom och hämtar sök fältet
const searchInput = document.children[0].children[1].children[1].children[1];
--WARNNING-- const searchField = document.getElementById("searchField");
console.log(searchField)*/

/*  keydown keyup */
searchField.addEventListener("keyup", handleKeyPress);

function handleKeyPress(e) {
  // Ta emot/läsa av värdert i fältet i input
  // skicka det till en annan funktion searchBooks
  // searchBooks returnerar en filtrerad lista
  // Filtrerade listan skickas till renderBookList
  searchBooks(e.target.value);
}


function searchBooks(searchTerm) {
  //Loop igenom bookList
  // För varje varv i loopen, ta det aktuella elementet (boke)
  // jämför titeln med söktermen
  // Om söktermen finns någonstans i titteln lägg till elementet i en ny lista (filteredList)
  // Retur filteredList eller renderBookList
  let filteredList = [];
  for (let i = 0; i < bookList.length; i++) {
    const title = bookList[i].title.toLowerCase();
    if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
      filteredList.push(bookList[i]);
    }
  }
  renderBookList(filteredList);
}



function renderBookList(bookList) {
  //Element i html listan visas/döljs beroende på listans innehåll.
        
  const existingElement = document.querySelector(".book-list");
  console.log(existingElement);


  const root = document.getElementById('root');
  if(existingElement){
    root.removeChild(existingElement);
    //root.replaceChild(existingElement, html);
  } 
  if(bookList.length > 0){   
  //const htmlElement = document.createElement('ul');
  root.insertAdjacentHTML("beforeend",   BookList(bookList));
  }
 
}
