/*function Home() {
  return (
    <div>
      <h1>Welcome to Library Management System</h1>
    </div>
  );
}

export default Home;
*/

function Home() {
return ( <div className="home-container">

  <div className="hero-section">
    <h1>📚 Library Management System</h1>

    <p>
      Manage your books efficiently.
      Add, search, and organize your
      library collection in one place.
    </p>

    <button className="btn">
      Explore Books
    </button>
  </div>

  <div className="features">

    <div className="feature-card">
      <h2>📖 Books</h2>
      <p>View all available books.</p>
    </div>

    <div className="feature-card">
      <h2>➕ Add Books</h2>
      <p>Add new books to the library.</p>
    </div>

    <div className="feature-card">
      <h2>🔍 Search</h2>
      <p>Find books quickly and easily.</p>
    </div>

  </div>

</div>

);
}

export default Home;

