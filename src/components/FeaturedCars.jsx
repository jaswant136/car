function FeaturedCars() {
  const cars = [
    {
      name: "BMW M4",
      price: "₹1.20 Cr",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },
    {
      name: "Audi R8",
      price: "₹2.50 Cr",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
    },
    {
      name: "Mercedes AMG GT",
      price: "₹2.80 Cr",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    },
  ];

  return (
    <section className="cars-section" id="cars">

      <div className="container">

        <div className="section-heading">
          <span>FEATURED CARS</span>
          <h2>Premium Collection</h2>
        </div>

        <div className="cars-grid">

          {cars.map((car, index) => (
            <div className="car-card" key={index}>

              <img
                src={car.image}
                alt={car.name}
              />

              <div className="car-content">

                <h3>{car.name}</h3>

                <p>{car.price}</p>

                <button>
                  View Details
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedCars;