function Brands() {
  const brands = [
    "BMW",
    "Mercedes",
    "Audi",
    "Porsche",
    "Lexus",
    "Jaguar",
  ];

  return (
    <section className="brands-section" id="brands">

      <div className="container">

        <div className="section-heading">
          <span>TOP BRANDS</span>
          <h2>Luxury Brands We Offer</h2>
        </div>

        <div className="brands-grid">

          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              {brand}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Brands;