import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<BookDetails />}
/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;