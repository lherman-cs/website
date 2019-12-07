import React, { useState, Fragment } from "react";
import styles from "./Default.module.css";
import { useTypewriter } from "./Default.hook";
import { Avatar } from "@material-ui/core";

const Introduction: React.FC = props => {
  const [showBlurb, setShowBlurb] = useState(false);
  const name = useTypewriter("Hi, I'm Lukas!", () => {
    setShowBlurb(true);
  });
  return (
    <Fragment>
      <h1 className={styles.type}>{name}</h1>
      <p className={styles.blurb} style={{ opacity: showBlurb ? 1 : 0 }}>
        Currently work for Amazon
      </p>
    </Fragment>
  );
};

const Default: React.FC = () => {
  return (
    <div className={styles.container}>
      <Avatar
        alt="Profile"
        src={process.env.PUBLIC_URL + "/img/profile.jpeg"}
        style={{
          height: 128,
          width: 128
        }}
      />
      <Introduction></Introduction>
    </div>
  );
};

export default Default;
