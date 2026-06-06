function Services() {
  const services = [
    "New Car Sales",
    "Used Car Sales",
    "Car Financing",
    "Insurance Assistance",
    "Test Drives",
    "Vehicle Exchange",
  ];

  return (
    <section className="services-section">

      <div className="container">

        <div className="section-heading">
          <span>SERVICES</span>
          <h2>What We Offer</h2>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;