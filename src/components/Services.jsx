import React from 'react';

const servicesData = [
  { icon: "fas fa-info-circle", title: "Information Desk", desc: "Get assistance and information to navigate the mall with ease." },
  { icon: "fas fa-search", title: "Lost and Found", desc: "Misplaced something? Our team is here to help you recover your items." },
  { icon: "fas fa-money-check-alt", title: "ATM", desc: "Convenient access to cash with multiple ATMs throughout the mall." },
  { icon: "fas fa-wheelchair", title: "Handicap Assistance", desc: "Accessible facilities and support for a comfortable visit." },
  { icon: "fas fa-first-aid", title: "First Aid", desc: "Immediate medical assistance available for emergencies." },
  { icon: "fas fa-baby-carriage", title: "Stroller", desc: "Complimentary strollers for families with young children." },
  { icon: "fas fa-parking", title: "Priority Parking", desc: "Dedicated parking spaces for accessibility and convenience." },
  { icon: "fas fa-baby", title: "Baby Changing", desc: "Clean and comfortable baby changing stations for parents." },
  { icon: "fas fa-wifi", title: "Wi-Fi", desc: "Stay connected with free high-speed Wi-Fi across the mall." },
  { icon: "fas fa-cut", title: "Tailoring", desc: "On-site tailoring services for quick alterations and custom fits." },
  { icon: "fas fa-car", title: "Parking", desc: "Ample parking space for a hassle-free visit." },
  { icon: "fas fa-spa", title: "Salon", desc: "Pamper yourself at our in-mall salon with top-notch services." },
  { icon: "fas fa-gift", title: "Gift Wrap", desc: "Beautiful gift wrapping services to make your presents special." },
  { icon: "fas fa-umbrella", title: "Umbrella Service", desc: "Stay dry with complimentary umbrellas on rainy days." },
  { icon: "fas fa-film", title: "Entertainment", desc: "Enjoy movies, games, and live events for all ages." }
];

export default function Services() {
  return (
    <section id="services" className="section light pop-up-scroll">
      <div className="container">
        <h2 className="pop-up-scroll">Our Services</h2>
        <p className="pop-up-scroll" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          At SFC Mega Mall, we go beyond shopping to offer a complete experience with a range 
          of integrated services designed for your convenience and comfort.
        </p>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card pop-up-scroll">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}