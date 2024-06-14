import React from "react";
import styles from "./home.module.css";

import {
  AboutUsSection,
  DifferenceSection,
  FeatureSection,
} from "../../components/Home";

const Home = (props) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id={styles.home}>
      <section id="aboutUs">
        <AboutUsSection scrollToSection={scrollToSection} />
      </section>
      <section id="difference">
        <DifferenceSection />
      </section>
      <section id="feature">
        <FeatureSection />
      </section>
    </div>
  );
};

export default Home;
