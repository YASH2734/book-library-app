import axios from "axios";
import { useEffect, useState } from "react";

import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

function Books() {

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("/api/books")
      .then((res) => {
        setBooks(res.data);
      });
  }, []);

  const filteredBooks =
    books.filter((book) =>
      book.title
      .toLowerCase()
      .includes(search.toLowerCase())
    );

  return (
    <div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="book-grid">

        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}

      </div>

    </div>
  );
}

export default Books;