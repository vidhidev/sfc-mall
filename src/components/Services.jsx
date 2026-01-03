export default function Services() {
  return (
    <section id="services" className="section dark pop-up-scroll">
      <div className="container">
        <h2>Our Services</h2>
        <p>
          At SFC Mega Mall, we go beyond shopping to offer a complete experience.
        </p>

        <div className="services-grid">

          <div className="service-card pop-up-scroll">
            <i className="fas fa-info-circle"></i>
            <h3>Information Desk</h3>
            <p>Assistance and guidance within the mall.</p>
          </div>

          <div className="service-card pop-up-scroll">
            <i className="fas fa-search"></i>
            <h3>Lost & Found</h3>
            <p>Helping recover misplaced items.</p>
          </div>

          <div className="service-card pop-up-scroll">
            <i className="fas fa-money-check-alt"></i>
            <h3>ATM</h3>
            <p>Multiple ATMs for convenience.</p>
          </div>

          <div className="service-card pop-up-scroll">
            <i className="fas fa-wheelchair"></i>
            <h3>Wheelchair Assistance</h3>
            <p>Accessible facilities for everyone.</p>
          </div>

          <div className="service-card pop-up-scroll">
            <i className="fas fa-first-aid"></i>
            <h3>First Aid</h3>
            <p>Immediate medical assistance.</p>
          </div>

          <div className="service-card pop-up-scroll">
            <i className="fas fa-wifi"></i>
            <h3>Wi-Fi</h3>
            <p>Free high-speed internet.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
