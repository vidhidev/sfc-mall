export default function Contact() {
  return (
    <section id="contact" className="section dark pop-up-scroll">
      <h2>Contact Us</h2>
      
      <div className="contact-info" style={{ textAlign: "center", marginBottom: "30px" }}>
        <p><strong>Email:</strong> sfc.infracon@gmail.com</p>
        <p><strong>Address:</strong> SFC Mega Mall, Sangli - Miraj Rd, Sangli, Maharashtra 416416</p>
      </div>

      <div className="map-container">
        {/* Fixed: style must be an object and allowFullScreen must be camelCase */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.3166295874116!2d74.5697631!3d16.860224499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1186a8739d50b%3A0x14b4771ad94e71ad!2sSFC%20MEGAA%20MALL!5e0!3m2!1sen!2sin!4v1767439844109!5m2!1sen!2sin"
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="SFC Mega Mall Location"
        ></iframe>
      </div>

      <div className="social-icons">
        {/* Added rel="noopener noreferrer" for security on external links */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
      </div>
    </section>
  );
}