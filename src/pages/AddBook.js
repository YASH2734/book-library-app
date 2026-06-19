import axios from "axios";
import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const saveBook = () => {
    axios.post("/api/books", {
      title,
      author
    });

    alert("Book Added");

    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h2>Add New Book</h2>

      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) =>
          setAuthor(e.target.value)
        }
      />

      <br /><br />

      <button onClick={saveBook}>
        Save Book
      </button>
    </div>
  );
}

export default AddBook;
