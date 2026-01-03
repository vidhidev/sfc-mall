import { useState } from "react";
import styles from "./Contact.module.css";
import { EMAIL, PHONE } from "../config/contact";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Production: hook up to form handler / API - for now log to console
    console.log("Contact enquiry:", form);
    setForm({ name: "", email: "", phone: "", message: "" });
    alert("Thank you! Your enquiry has been received.");
  }

  return (
    <section id="contact" className={`${styles.section} pop-up-scroll`}>
      <h2>Contact Us</h2>
      
      <div className="contact-info" style={{ textAlign: "center", marginBottom: "20px" }}>
        <p><strong>Location:</strong> SFC Megaa Mall, Heart of Sangli City, Maharashtra</p>
        <p><strong>Phone:</strong> {PHONE}</p>
        <p><strong>Email:</strong> {EMAIL}</p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.mapContainer}>
          {/* Google Maps embed placeholder */}
          <iframe 
            src="https://www.google.com/maps/embed"
            width="600" 
            height="450" 
            style={{ border: 0, width: '100%', height: '100%' }} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SFC Megaa Mall Location"
          ></iframe>
        </div>

        <form className={styles.enquiryForm} onSubmit={handleSubmit} aria-label="Enquiry form">
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input name="email" value={form.email} onChange={handleChange} type="email" required />
          </label>

          <label>
            Phone
            <input name="phone" value={form.phone} onChange={handleChange} required />
          </label>

          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} required />
          </label>

          <button type="submit" className="btn-primary">Send Enquiry</button>
        </form>
      </div>

      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
      </div>
    </section>
  );
} 