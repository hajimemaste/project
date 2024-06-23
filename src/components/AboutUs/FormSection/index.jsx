import React, { useState } from "react";
import styles from "./formSection.module.css";
import { Btn } from "../../atoms";
import { icon } from "../../../assets/svgs";

const FormSection = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleTelephoneChange = (event) => setTelephone(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
          <h1>Tell Us About Your Project</h1>
          <p>
            Please share your availability, or scroll down to send us a message
            directly.
          </p>
        </div>
        <form className={styles.box}>
          <div className={styles.box_line}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              className={styles.inputName}
              onChange={handleNameChange}
            />
            <input
              type="number"
              placeholder="Telephone"
              value={telephone}
              className={styles.inputTelephone}
              onChange={handleTelephoneChange}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className={styles.inputEmail}
            onChange={handleEmailChange}
          />
          <textarea
            type="text"
            placeholder="Project Description"
            value={description}
            className={styles.inputDescription}
            rows={4}
            onChange={handleDescriptionChange}
          />
          <div className={styles.btn}>
            <Btn
              title="Send"
              color="rgba(255, 250, 244, 1)"
              backgroundcolor="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
              border="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
              size="12px 35px"
            />
            <div style={{ flex: 1 }}></div>
          </div>
        </form>
      </div>
      <div className={styles.information}>
        <div className={styles.information_header}>
          <h4>General Information</h4>
          <p>Contact our headquarter today.</p>
        </div>
        <div className={styles.information_content}>
          <div className={styles.information_line}>
            <icon.PhoneIcon />
            <p>+226-735-551-17</p>
          </div>
          <div className={styles.information_line}>
            <icon.EmailIcon />
            <p>jessica.hanson@example.com</p>
          </div>
          <div className={styles.information_line} style={{ border: "none" }}>
            <icon.LocationIcon />
            <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
