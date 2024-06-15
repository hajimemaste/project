import React from "react";
import styles from "./aboutUs.module.css";
import { IntroSection, FormSection } from "../../components/AboutUs";

const AboutUsPage = (props) => {
  return (
    <div id={styles.aboutUs}>
      <section id="aboutUs">
        <IntroSection />
      </section>
      <section id="form">
        <FormSection />
      </section>
    </div>
  );
};

export default AboutUsPage;
