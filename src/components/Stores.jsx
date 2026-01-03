import relianceDigital from "../assets/reliance-digital.jpg";
import relianceTrends from "../assets/reliance-trends.jpg";
import tanishq from "../assets/tanishq.jpg";
import puma from "../assets/puma.jpg";
import footprint from "../assets/reliance-footprint.jpg";
import bata from "../assets/bata.jpg";
import pantaloons from "../assets/pantaloons.jpg";
import crocodile from "../assets/crocodile.jpg";
import unlimited from "../assets/unlimited.jpg";
import biba from "../assets/biba.jpg";
import ethnicity from "../assets/ethinicity.jpg";
import ipalace from "../assets/i-palace.jpg";

export default function Stores() {
  return (
    <section id="stores" className="section light pop-up-scroll">
      <h2>Our Stores</h2>

      <div className="store-gallery">

        {/* RELIANCE DIGITAL */}
        <div className="store-card pop-up-scroll">
          <img src={relianceDigital} className="store-img" />
          <div className="store-info">
            <h3>RELIANCE DIGITAL</h3>
            <p><strong>Category:</strong> Electronics</p>
            <p><strong>Location:</strong> Lower Ground Floor</p>
            <p><strong>Timings:</strong> 10:00 AM – 10:00 PM</p>
            <p>
              One stop shop for digital products, mobiles, laptops, appliances,
              computers, gaming consoles, tablets, wireless phones, high-end TVs,
              cameras and camcorders.
            </p>
          </div>
        </div>

        {/* RELIANCE TRENDS */}
        <div className="store-card pop-up-scroll">
          <img src={relianceTrends} className="store-img" />
          <div className="store-info">
            <h3>RELIANCE TRENDS</h3>
            <p><strong>Category:</strong> Apparels & Accessories</p>
            <p><strong>Location:</strong> Lower Ground Floor</p>
            <p><strong>Timings:</strong> 10:00 AM – 10:00 PM</p>
            <p>
              With an unparalleled assortment of international and national brands
              in men’s, women’s, and kids’ apparel.
            </p>
          </div>
        </div>

        {/* TANISHQ */}
        <div className="store-card pop-up-scroll">
          <img src={tanishq} className="store-img" />
          <div className="store-info">
            <h3>TANISHQ</h3>
            <p><strong>Category:</strong> Jewellery</p>
            <p><strong>Location:</strong> Upper Ground Floor</p>
            <p><strong>Timings:</strong> 10:00 AM – 10:00 PM</p>
            <p>
              Known for superior craftsmanship, exclusive designs, and quality.
            </p>
          </div>
        </div>

        {/* PUMA */}
        <div className="store-card pop-up-scroll">
          <img src={puma} className="store-img" />
          <div className="store-info">
            <h3>PUMA</h3>
            <p><strong>Category:</strong> Sports Wear & Accessories</p>
            <p><strong>Location:</strong> Upper Ground Floor</p>
            <p><strong>Timings:</strong> 10:00 AM – 10:00 PM</p>
          </div>
        </div>

        {/* FOOTPRINT */}
        <div className="store-card pop-up-scroll">
          <img src={footprint} className="store-img" />
          <div className="store-info">
            <h3>RELIANCE FOOTPRINT</h3>
            <p><strong>Category:</strong> Footwear</p>
            <p><strong>Location:</strong> Upper Ground Floor</p>
            <p><strong>Timings:</strong> 10:00 AM – 10:00 PM</p>
          </div>
        </div>

        {/* BATA */}
        <div className="store-card pop-up-scroll">
          <img src={bata} className="store-img" />
          <div className="store-info">
            <h3>BATA</h3>
            <p><strong>Category:</strong> Footwear</p>
            <p><strong>Location:</strong> Upper Ground Floor</p>
            <p><strong>Timings:</strong> 10:00 AM – 10:00 PM</p>
          </div>
        </div>

        {/* PANTALOONS */}
        <div className="store-card pop-up-scroll">
          <img src={pantaloons} className="store-img" />
          <div className="store-info">
            <h3>PANTALOONS</h3>
            <p><strong>Category:</strong> Fashion</p>
            <p><strong>Location:</strong> First Floor</p>
            <p><strong>Timings:</strong> TBA</p>
          </div>
        </div>

        {/* CROCODILE */}
        <div className="store-card pop-up-scroll">
          <img src={crocodile} className="store-img" />
          <div className="store-info">
            <h3>CROCODILE</h3>
            <p><strong>Category:</strong> Men’s Apparel</p>
            <p><strong>Location:</strong> First Floor</p>
          </div>
        </div>

        {/* UNLIMITED */}
        <div className="store-card pop-up-scroll">
          <img src={unlimited} className="store-img" />
          <div className="store-info">
            <h3>UNLIMITED</h3>
            <p><strong>Category:</strong> Family Fashion</p>
            <p><strong>Location:</strong> First Floor</p>
          </div>
        </div>

        {/* BIBA */}
        <div className="store-card pop-up-scroll">
          <img src={biba} className="store-img" />
          <div className="store-info">
            <h3>BIBA</h3>
            <p><strong>Category:</strong> Ladies Ethnic Wear</p>
            <p><strong>Location:</strong> First Floor</p>
          </div>
        </div>

        {/* ETHNICITY */}
        <div className="store-card pop-up-scroll">
          <img src={ethnicity} className="store-img" />
          <div className="store-info">
            <h3>ETHNICITY</h3>
            <p><strong>Category:</strong> Ethnic Fashion</p>
            <p><strong>Location:</strong> First Floor</p>
          </div>
        </div>

        {/* iPALACE */}
        <div className="store-card pop-up-scroll">
          <img src={ipalace} className="store-img" />
          <div className="store-info">
            <h3>i PALACE</h3>
            <p><strong>Category:</strong> Apple Reseller</p>
            <p><strong>Location:</strong> Upper Ground Floor</p>
          </div>
        </div>

      </div>
    </section>
  );
}
