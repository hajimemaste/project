import { SCREEN_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Footer from "../Footer";
import CallToAction from "../CallToAction";
import Header from "../Header";
import styles from "./layoutContainer.module.css";

const LayoutContainer = ({
  component: Component,
  isHeader,
  isCta,
  isFooter,
}) => {
  return (
    <div className={styles.layout_container}>
      {isHeader && <Header />}
      <Component />
      {isCta && <CallToAction />}
      {isFooter && <Footer />}
    </div>
  );
};

export default LayoutContainer;
