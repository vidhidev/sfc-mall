import director1 from "../assets/sukumar-chougule.jpg";
import director2 from "../assets/walchand-chougle.jpg";

export default function About() {
  return (
    <section id="aboutus" className="section light pop-up-scroll">
      <h2>About SFC Lifestyle</h2>

      <p>
        SFC Megaa Mall has introduced mall culture in its true sense to Sangli.
        With a unique ambience and modern facilities, it is the pride of the city.
      </p>

      <div className="vision-mission">
        <div className="vision-box pop-up-scroll">
          <h4>Vision</h4>
          <p>
            To be the most respected leader in the construction industry by
            delivering high-quality projects.
          </p>
        </div>

        <div className="vision-box pop-up-scroll">
          <h4>Mission</h4>
          <p>
            To build long-term relationships through integrity and performance.
          </p>
        </div>
      </div>

      <div className="directors">
        <div className="director-card pop-up-scroll">
          <img src={director1} />
          <h4>Mr. Sukumar F. Chougule</h4>
          <p><strong>Chairman</strong></p>
        </div>

        <div className="director-card pop-up-scroll">
          <img src={director2} />
          <h4>Mr. Walchand S. Chougule</h4>
          <p><strong>Director</strong></p>
        </div>
      </div>
    </section>
  );
}
