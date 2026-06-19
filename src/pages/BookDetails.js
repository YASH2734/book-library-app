import { useParams } from "react-router-dom";

function BookDetails() {

const { id } = useParams();

return ( <div className="details-container">

  <h1>📖 Book Details</h1>

  <img
    src="https://via.placeholder.com/200"
    alt="Book Cover"
  />

  <h2>Book ID: {id}</h2>

  <p>
    Title: Sample Book
  </p>

  <p>
    Author: Sample Author
  </p>

  <p>
    Category: Programming
  </p>

  <p>
    Description:
    This page displays detailed
    information about a selected book.
  </p>

</div>

);
}

export default BookDetails;
