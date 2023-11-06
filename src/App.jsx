import { useState } from "react";

import "./App.scss";

import TopBar from "./components/topBar";
import UrlData from "./components/urlData";
import RequestBlock1 from "./components/requestBlock1";

function App() {
  const [inputUrl, setInputUrl] = useState("");

  const handleForm = (url) => {
    setInputUrl(url);
  };

  return (
    <>
      <div>
        <TopBar onSubmit={handleForm} />
        <div className="dataCardsContainer">
          <UrlData url={inputUrl} />
          <RequestBlock1 />
        </div>
      </div>
    </>
  );
}

export default App;
