import { Link } from "react-router-dom";

function BookCard({ book }) {
return ( <div className="card"> <img
     src="https://via.placeholder.com/150"
     alt="book"
   />

  <h3>{book.title}</h3>

  <p>{book.author}</p>

  <Link to={`/book/${book.id}`}>
    <button>View Details</button>
  </Link>
</div>

);
}

export default BookCard;
