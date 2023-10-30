import React, { useState } from "react";
import styles from "./TopBar.module.scss";
import { SearchIcon } from "../SearchIcon";

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
            placeholder="Enter a valid URL"
          />
          <button type="submit" className={styles.topBar__form__btnMain}>
            <span className={styles.btnText}>SEND</span>
            <span className={styles.smIconWrapper}>
              <SearchIcon />
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default TopBar;
