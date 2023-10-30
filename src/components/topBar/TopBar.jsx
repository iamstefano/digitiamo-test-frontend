import React, { useState } from "react";
import styles from "./TopBar.module.scss";

const TopBar = () => {
  return (
    <>
      <div className={styles.topBar}>
        <form className={styles.topBar__form}>
          <select name="methods" className={styles.topBar__form__select}>
            <option value="methGet">GET</option>
            <option value="methPost">POST</option>
            <option value="methPut">PUT</option>
            <option value="methDelete">DELETE</option>
            <option value="methInfo">INFO</option>
            {/* <option value="methDumb">DUMB</option> */}
          </select>

          <input
            type="url"
            className={styles.topBar__form__searchBar}
            placeholder="Enter URL"
          />
          <button type="submit" className={styles.topBar__form__btnMain}>
            <span className={styles.btnText}>SEND</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default TopBar;
