function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  //return 2 arrays inside 1 array
  let booksLoanedOut = books.filter((book) => !book.borrows[0].returned);
  let booksReturned = books.filter((book) => book.borrows[0].returned);
  let partitionedBooks = [];
  partitionedBooks.push(booksLoanedOut,booksReturned);
  return partitionedBooks
}

function getBorrowersForBook({borrows}, accounts) {
  let findMatchingAccount =[];
  let borrowerList = borrows.map((borrow) => {
    let findMatchingAccount = accounts.find((account) => account.id === borrow.id);
    findMatchingAccount["returned"] = borrow.returned;
    return  findMatchingAccount;
  })
  return borrowerList.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
