'use strict';

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
    }
  ];

const searchInput = null;

// Ta emot/läsa av värdert i fältet i input  
// skicka det till en annan funktion searchBooks
// searchBooks returnerar en filtrerad lista
// Filtrerade listan skickas till renderBookList
function handleKeyPress(input) {

   searchBooks(input);
};

//Loop igenom bookList
// För varje varv i loopen, ta det aktuella elementet (boke)
// jämför titeln med söktermen
// Om söktermen finns någonstans i titteln lägg till elementet i en ny lista (filteredList)
// Retur filteredList eller renderBookList


function searchBooks(searchTerm) {
    let filteredList = [];
      for (let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
          filteredList.push(bookList[i]);
        }
      }
      renderBookList(filteredList);
    }

handleKeyPress('e');

//Element i html listan visas/döljs beroende på listans innehåll.
function renderBookList(list) {
    console.log(list)
}