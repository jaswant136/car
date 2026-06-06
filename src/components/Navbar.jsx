function Navbar() {
  return (
    <nav className="navbar">

      <div className="container">

        <div className="logo">
          Velocity<span>Motors</span>
        </div>

        <div className="nav-links">

          <a href="#home">Home</a>
          <a href="#cars">Cars</a>
          <a href="#brands">Brands</a>
          <a href="#inventory">Inventory</a>
          <a href="#contact">Contact</a>

        </div>

        <button className="nav-btn">
          Book Test Drive
        </button>

      </div>

    </nav>
  );
}

export default Navbar;