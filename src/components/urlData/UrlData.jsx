import React from "react";

import styles from "./UrlData.module.scss";

const UrlData = ({ url }) => {
  let domain = "";
  let scheme = "";
  let path = "";

  try {
    const urlObj = new URL(url);
    domain = urlObj.hostname;
    scheme = urlObj.protocol.replace(":", "");
    path = urlObj.pathname;
  } catch (error) {
    // Invalid URL input
  }

  return (
    <div className={styles.urlData}>
      <p className={styles.urlData__title}>Url info</p>
      <div className={styles.urlData__infoData}>
        <label>DOMAIN:</label>
        <span>{domain}</span>
      </div>
      <div className={styles.urlData__infoData}>
        <label>SCHEME:</label>
        <span>{scheme}</span>
      </div>
      <div className={styles.urlData__infoData}>
        <label>PATH:</label>
        <span>{path}</span>
      </div>
    </div>
  );
};

export default UrlData;
