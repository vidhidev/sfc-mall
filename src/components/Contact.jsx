export default function Contact() {
  return (
    <section id="contact" className="section dark pop-up-scroll">
      <h2>Contact Us</h2>

      <p>Email: sfc.infracon@gmail.com</p>

      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.3165262239763!2d74.56718817367556!3d16.86022961778035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1186a8739d50b%3A0x14b4771ad94e71ad!2sSFC%20MEGAA%20MALL!5e0!3m2!1sen!2sin!4v1767438192693!5m2!1sen!2sin"
       width="600" height="450" style="border:0;"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </section>
  );
}
