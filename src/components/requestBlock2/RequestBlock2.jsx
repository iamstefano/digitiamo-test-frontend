import React from "react";

import styles from "./RequestBlock2.module.scss";

const RequestBlock2 = ({ statusCode, currentDate }) => {
  const statusMessage = statusCode === 400 ? "NOT OK" : "OK";

  return (
    <div className={styles.requestBlock2}>
      <p className={styles.requestBlock2__title}>Response</p>
      <div className={styles.requestBlock2__infoData}>
        <span>
          HTTP/1.1 {statusCode} {statusMessage}
        </span>
      </div>
      <div className={styles.requestBlock2__infoData}>
        <span>Date: {currentDate}</span>
      </div>
      <div className={styles.requestBlock2__infoData}>
        <span>Server: Apache / 2.2.14 (Win32)</span>
      </div>
    </div>
  );
};

export default RequestBlock2;
