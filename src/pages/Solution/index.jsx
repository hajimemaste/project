import React from "react";
import styles from "./solution.module.css";
import {
  IntroSection,
  ProcedureSection,
  ParameterSection,
  CustomerSection,
} from "../../components/Solution";

const Solution = (props) => {
  return (
    <div id={styles.solution}>
      <section id="introSection">
        <IntroSection />
      </section>
      <section id="produreSection">
        <ProcedureSection />
      </section>
      <section id="parameterSection">
        <ParameterSection />
      </section>
      <section id="customerSection">
        <CustomerSection />
      </section>
    </div>
  );
};

export default Solution;
