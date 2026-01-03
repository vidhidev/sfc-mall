import React from "react";
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

const storeData = [
  { id: 1, name: "RELIANCE DIGITAL", img: relianceDigital, cat: "Electronics", loc: "Lower Ground", size: "large", desc: "One stop shop for digital products, appliances, and high-end electronics." },
  { id: 2, name: "RELIANCE TRENDS", img: relianceTrends, cat: "Apparels", loc: "Lower Ground", size: "wide", desc: "Unparalleled assortment of international and national brands." },
  { id: 3, name: "TANISHQ", img: tanishq, cat: "Jewellery", loc: "Upper Ground", size: "standard" },
  { id: 4, name: "i PALACE", img: ipalace, cat: "Apple Reseller", loc: "Upper Ground", size: "standard" },
  { id: 5, name: "PANTALOONS", img: pantaloons, cat: "Fashion", loc: "First Floor", size: "wide" },
  { id: 6, name: "PUMA", img: puma, cat: "Sports", loc: "Upper Ground", size: "standard" },
  { id: 7, name: "BATA", img: bata, cat: "Footwear", loc: "Upper Ground", size: "standard" },
  { id: 8, name: "CROCODILE", img: crocodile, cat: "Men’s Apparel", loc: "First Floor", size: "standard" },
  { id: 9, name: "BIBA", img: biba, cat: "Ethnic Wear", loc: "First Floor", size: "standard" },
  { id: 10, name: "ETHNICITY", img: ethnicity, cat: "Ethnic Fashion", loc: "First Floor", size: "standard" },
  { id: 11, name: "UNLIMITED", img: unlimited, cat: "Family Fashion", loc: "First Floor", size: "standard" },
  { id: 12, name: "RELIANCE FOOTPRINT", img: footprint, cat: "Footwear", loc: "Upper Ground", size: "standard" },
];

export default function Stores() {
  return (
    <section id="stores" className="section light pop-up-scroll">
      <div className="container">
        <h2 className="pop-up-scroll">Our Premium Brands</h2>
        <div className="bento-grid">
          {storeData.map((store) => (
            <div key={store.id} className={`store-bento-card ${store.size} pop-up-scroll`}>
              <div className="store-image-wrapper">
                <img src={store.img} alt={store.name} className="store-img" />
              </div>
              <div className="store-overlay">
                <div className="store-info-top">
                  <span className="category-tag">{store.cat}</span>
                  <h3>{store.name}</h3>
                </div>
                <div className="store-details">
                  <p><i className="fas fa-map-marker-alt"></i> {store.loc}</p>
                  {store.desc && <p className="store-desc">{store.desc}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}