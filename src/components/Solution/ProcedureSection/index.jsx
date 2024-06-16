import React from "react";
import styles from "./procedureSection.module.css";

const ProcedureSection = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Our product{" "}
          <span>
            receiving and <br />
            fulfillment process
          </span>
        </h1>
        <h2 className={styles.sub}>HOW IT WORK</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.line_1}>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div className={styles.content_header}>
                <p className={styles.content_id}>02</p>
                <p>Lorem ipsum dolor sit consectetur.</p>
              </div>
              <p className={styles.content_sub}>
                Lorem ipsum dolor sit amet consectetur. Ultricies convallis
                pretium egestas aenean pellentesque rhoncus elit. Non nisi
                tincidunt sit odio in massa.
              </p>
              <div className={`${styles.dot} ${styles.dot_2}`}></div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div className={styles.content_header}>
                <p className={styles.content_id}>04</p>
                <p>Lorem ipsum dolor sit consectetur.</p>
              </div>
              <p className={styles.content_sub}>
                Lorem ipsum dolor sit amet consectetur. Ultricies convallis
                pretium egestas aenean pellentesque rhoncus elit. Non nisi
                tincidunt sit odio in massa.
              </p>
              <div className={`${styles.dot} ${styles.dot_4}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.line_2}>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div className={styles.content_header}>
                <p className={styles.content_id}>01</p>
                <p>Lorem ipsum dolor sit consectetur.</p>
              </div>
              <p className={styles.content_sub}>
                Lorem ipsum dolor sit amet consectetur. Ultricies convallis
                pretium egestas aenean pellentesque rhoncus elit. Non nisi
                tincidunt sit odio in massa.
              </p>
              <div className={`${styles.dot} ${styles.dot_1}`}></div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div className={styles.content_header}>
                <p className={styles.content_id}>03</p>
                <p>Lorem ipsum dolor sit consectetur.</p>
              </div>
              <p className={styles.content_sub}>
                Lorem ipsum dolor sit amet consectetur. Ultricies convallis
                pretium egestas aenean pellentesque rhoncus elit. Non nisi
                tincidunt sit odio in massa.
              </p>
              <div className={`${styles.dot} ${styles.dot_3}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureSection;
