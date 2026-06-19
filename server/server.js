const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let books = [
  {
    id: 1,
    title: "Java Programming",
    author: "James Gosling"
  },
  {
    id: 2,
    title: "React JS Masterclass",
    author: "Dr.Shubham Sarda"
  }
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(newBook);

  res.json({
    message: "Book Added"
  });
});

app.listen(5000, () => {
  console.log(
    "Server Running On Port 5000"
  );
});
