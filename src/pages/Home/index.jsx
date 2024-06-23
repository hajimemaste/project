import React from "react";
import styles from "./home.module.css";

import {
  AboutUsSection,
  DifferenceSection,
  FeatureSection,
  InteractiveSection,
  ShowcaseSection,
  MemberSection,
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
      <section id="aboutUs" className={styles.scroll}>
        <AboutUsSection scrollToSection={scrollToSection} />
      </section>
      <section id="difference" className={styles.scroll}>
        <DifferenceSection />
      </section>
      <section id="feature" className={styles.scroll}>
        <FeatureSection />
      </section>
      <section id="interactive" className={styles.scroll}>
        <InteractiveSection />
      </section>
      <section id="showcase" className={styles.scroll}>
        <ShowcaseSection />
      </section>
      <section id="member" className={styles.scroll}>
        <MemberSection />
      </section>
    </div>
  );
};

export default Home;
