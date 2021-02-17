//function to help count items in an array
function helperCounter(anyArray) {
  let counter = 0;
  anyArray.forEach((itemInArray) => counter++);
  return counter;
}

function getTotalBooksCount(books) {
  return helperCounter(books);
}

function getTotalAccountsCount(accounts) {
  return helperCounter(accounts);
}

function getBooksBorrowedCount(books) {
  return helperCounter(books.filter((book) => !book.borrows[0].returned));
}

function getMostCommonGenres(books) {
  return books.reduce((acc, book) => {
    let genre = book.genre;
    if(!acc.some((accumulator) => accumulator.name === genre)) {
      acc.push({ "name": genre, "count": books.filter((thisBook) => thisBook.genre === genre).length});
    }
    return acc
  }, [] ).sort((a,b) => b.count - a.count ).slice(0,5);
}


function getMostPopularBooks(books) {
  return books.reduce((acc, book) => {
    acc.push({ "name": book.title, "count": book.borrows.length});
    return acc
   }, []).sort((a,b) => b.count - a.count).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  return books.reduce((acc,book) => {
    findAuthor = authors.find((author) => book.authorId === author.id).name;
    const authorName = `${findAuthor.first} ${findAuthor.last}`;
    if(!acc.some((accumulator) => accumulator.name === authorName)){
      acc.push({"name": authorName, "count": book.borrows.length});
    }
    return acc;
  },[]).sort((a,b) => b.count - a.count).slice(0,5)
}

module.exports = {
  helperCounter,
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
