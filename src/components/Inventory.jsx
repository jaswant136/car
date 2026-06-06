function Inventory() {
  const inventory = [
    "BMW X5",
    "Audi Q8",
    "Mercedes GLE",
    "Porsche Cayenne",
    "Jaguar F-Pace",
    "Lexus RX",
  ];

  return (
    <section className="inventory-section" id="inventory">

      <div className="container">

        <div className="section-heading">
          <span>INVENTORY</span>
          <h2>Available Vehicles</h2>
        </div>

        <div className="inventory-grid">

          {inventory.map((car, index) => (
            <div className="inventory-card" key={index}>
              <h3>{car}</h3>
              <button>Check Availability</button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Inventory;