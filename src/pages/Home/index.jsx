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
      <section id={styles.aboutUs}>
        <AboutUsSection scrollToSection={scrollToSection} />
      </section>
      <section id="difference">
        <DifferenceSection />
      </section>
      <section id={styles.feature}>
        <FeatureSection />
      </section>
      <section id={styles.interactive}>
        <InteractiveSection />
      </section>
      <section id={styles.showcase}>
        <ShowcaseSection />
      </section>
      <section id={styles.member}>
        <MemberSection />
      </section>
    </div>
  );
};

export default Home;
