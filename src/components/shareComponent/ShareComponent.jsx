import React from "react";
import RandomShareFunc from "../../helpers/RandomShareFunc";

import styles from "./ShareComponent.module.scss";

const ShareComponent = () => {
  const endpoint = RandomShareFunc();
  return (
    <div className={styles.shareComponent}>
      <h3 className={styles.shareComponent__title}>Share</h3>
      <div className={styles.shareComponent__link}>
        <a target="_blank">httprequest.com/{endpoint}</a>
      </div>
    </div>
  );
};

export default ShareComponent;
