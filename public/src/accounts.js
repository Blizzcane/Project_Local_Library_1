function findAccountById(accounts, id) {
  return accounts.find((account) => id === account.id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 )
}

function getTotalNumberOfBorrows(account, books) {
//It returns the number of times the account's ID appears in any book's `borrow` array.
let accountID = account.id;
//start a counter
let counter = 0;
//filter out the borrows
books.map((book) => book.borrows).forEach((borrow) => borrow.forEach((name) => {
  if(name.id === accountID){
    counter++;
  }
}))
return counter
}

//It returns an array of books and authors that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.

function getBooksPossessedByAccount(account, books, authors) {
  let accountID = account.id;
  //array of books borrowed by given account
  let booksBorrowed = books.filter((book) => book.borrows[0].id === accountID && !book.borrows[0].returned);
  booksBorrowed.forEach((book) => authors.forEach((authorName) => {
    if (authorName.id === book.authorId){
      book["author"] = authorName;
    }
  }))
  return booksBorrowed
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
