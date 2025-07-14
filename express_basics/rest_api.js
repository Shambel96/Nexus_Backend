const express = require("express");
const app = express();
const port = 8000;

//? middleware
app.use(express.json()); // read json file

// fake database => to store something
let books = [
  {
    id: 1,
    title: "Harry Potter",
    author: "Rowling",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert",
  },
];

// localhost:8000
// I want the user to know the list of books that i have
// read => GET
// resource => books
app.get("/books", (request, response) => {
  // as backend dev
  response.json(books);
});

// create a new book
app.post("/books", (request, response) => {
  const userBook = request.body;
  // title or author empty => Null, undefined, "", 0
  if (!userBook.title || !userBook.author) {
    response.status(400).json({
      message: "You forgot author or Title",
    });
    return;
  }
  //   if ....
  // try catch => recommended
  // const {title, author} = request.body
  const newId = books.length + 1;
  const newBook = {
    id: newId,
    title: userBook.title,
    author: userBook.author,
  };
  books.push(newBook);
  //   201 => Created
  console.log("Current book in my store", books);
  response.status(201).json(newBook);
});

// todo Implement it
app.put();
app.patch();
app.delete();
app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
//
