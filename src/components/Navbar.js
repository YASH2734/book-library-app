import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>📚 Library</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/addbook">Add Book</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;