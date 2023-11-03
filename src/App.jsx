import { useState } from "react";

import "./App.scss";

import TopBar from "./components/topBar";
import UrlData from "./components/urlData";

function App() {
  const [inputUrl, setInputUrl] = useState("");

  const handleForm = (url) => {
    setInputUrl(url);
  };

  return (
    <>
      <div>
        <TopBar onSubmit={handleForm} />
        <UrlData url={inputUrl} />
      </div>
    </>
  );
}

export default App;
