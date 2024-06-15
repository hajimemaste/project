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
      <section id="aboutUs">
        <AboutUsSection scrollToSection={scrollToSection} />
      </section>
      <section id="difference">
        <DifferenceSection />
      </section>
      <section id="feature">
        <FeatureSection />
      </section>
      <section id="interactive">
        <InteractiveSection />
      </section>
      <section id="showcase">
        <ShowcaseSection />
      </section>
      <section id="member">
        <MemberSection />
      </section>
    </div>
  );
};

export default Home;
