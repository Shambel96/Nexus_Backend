const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON bodies
let books = [
  {
    id: 1,
    title: "Oromay",
    author: "Haddis Alemayehu",
    Year: 1968,
    description: "Oromay is a novel by Haddis Alemayehu in Ethiopia!",
  },
  {
    id: 2,
    title: "Sebebe",
    author: "shambel Dechu",
    Year: 1970,
    description: "Sebebe is a novel by Shambel Dechu in Ethiopia!",
  },
  {
    id: 3,
    title: "Lorem",
    author: "Roba Alemayehu",
    Year: 1965,
    description: "Lorem is a novel by HRoba Alemayehu in Ethiopia!",
  },
  {
    id: 4,
    title: "Ipsum",
    author: "Tsebel Alemayehu",
    Year: 1885,
    description: "Ipsum is a novel by Tsebel Alemayehu in Ethiopia!",
  },
];

app.get("/", (req, res) => {
  res.send(books);
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id == id);
  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.send(book);
});

app.post("/books", (req, res) => {
  const { title, author, year, description } = req.body;
  if (!title || !author || !year || !description) {
    return res.status(400).send("All fields are required to fill.");
  }
  const newBook = {
    id: Date.now(),
    title,
    author,
    year,
    description,
  };
  books.push(newBook);

  // Send response with success message and all books
  res.status(201).json({
    message: "Book added successfully",
    book: newBook,
    allBooks: books,
  });
});

/* app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).send("Book not exist in the database");
  }
  const { title, author, Year, description } = req.body;
  book.title = title;
  book.author = author;
  book.Year = Year;
  book.description = description;

  res.status(201).json({
    message: "success",
    updatedBooks: books,
    status: 203,
  });
});
 */
/* app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    return res.status(404).send("Book not found");
  }

  const deletedBook = books.splice(bookIndex, 1)[0];

  res.status(200).json({
    message: "Book deleted successfully",
    deletedBook: deletedBook,
    remainingBooks: books,
    status: 200,
  });
}); */

app.patch("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res
      .status(404)
      .send("The user to be updated is not in  the database");
  }
  const { name, role } = req.body;
  if (name) {
    user.name = name;
  }
  if (role) {
    user.role = role;
  }

  res.status(201).json({
    message: "success",
    updatedBooks: books,
    status: 203,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://Localhost:${PORT}`);
});
