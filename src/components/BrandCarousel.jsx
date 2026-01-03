import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./BrandCarousel.module.css";

const brands = [
  { name: "Zara", logo: "https://dummyimage.com/300x150/cccccc/000000&text=ZARA" },
  { name: "H&M", logo: "https://dummyimage.com/300x150/cccccc/000000&text=H%26M" },
  { name: "Puma", logo: "https://dummyimage.com/300x150/cccccc/000000&text=PUMA" },
  { name: "Nike", logo: "https://dummyimage.com/300x150/cccccc/000000&text=NIKE" },
  { name: "Adidas", logo: "https://dummyimage.com/300x150/cccccc/000000&text=ADIDAS" },
  { name: "Levis", logo: "https://dummyimage.com/300x150/cccccc/000000&text=LEVIS" },
  { name: "Pantaloons", logo: "https://dummyimage.com/300x150/cccccc/000000&text=PANTALOONS" },
];

export default function BrandCarousel() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.accent}>50+</span> PREMIUM BRANDS TO CHOOSE
      </h2>

      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          navigation
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className={styles.logo}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.viewAll}>View All</button>
      </div>
    </section>
  );
}
