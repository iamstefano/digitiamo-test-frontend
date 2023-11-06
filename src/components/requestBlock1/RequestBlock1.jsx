import React from "react";

import styles from "./RequestBlock1.module.scss";

const RequestBlock1 = () => {
  return (
    <div className={styles.requestBlock1}>
      <p className={styles.requestBlock1__title}>Response</p>
      <div className={styles.requestBlock1__infoData}>
        <span>HTTP/1.1 302</span>
      </div>
      <div className={styles.requestBlock1__infoData}>
        <span>Location: /newpage.php</span>
      </div>
      <div className={styles.requestBlock1__infoData}>
        <span>Server: Apache / 2.2.14 (Win32)</span>
      </div>
    </div>
  );
};

export default RequestBlock1;
