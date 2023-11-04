import React, { useState } from "react";
import styles from "./TopBar.module.scss";
import { SearchIcon } from "../SearchIcon";

const TopBar = ({ onSubmit }) => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://api.myjson.online/v1/records/ab6c7e09-7254-4fd3-82d3-b1b14c373861"
      );
      const data = await res.json();
      setResponse(data.data[method]);
      onSubmit(url);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className={styles.topBar}>
        {error && <p>Error: {error}</p>}
        {response && (
          <>
            <p>Status Code: {response.statusCode}</p>
            <p>Description: {response.description}</p>
          </>
        )}
        <form className={styles.topBar__form} onSubmit={handleSubmit}>
          <select
            name="methods"
            className={styles.topBar__form__select}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
            <option value="INFO">INFO</option>
            <option value="DUMB">DUMB</option>
          </select>

          <input
            type="url"
            className={styles.topBar__form__searchBar}
            placeholder="Enter a valid URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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
