import { useState } from "react";

import "./App.scss";

import TopBar from "./components/topBar";
import UrlData from "./components/urlData";
import RequestBlock1 from "./components/requestBlock1";
import RequestBlock2 from "./components/requestBlock2";
import FormatCurrentDate from "./helpers/formatCurrentDate";
import ShareComponent from "./components/shareComponent/ShareComponent";
function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [statusCode, setStatusCode] = useState(null);

  const handleSubmit = (url, statusCode) => {
    setInputUrl(url);
    setStatusCode(statusCode);
  };

  return (
    <>
      <div>
        <TopBar onSubmit={handleSubmit} />
        <div className="dataCardsContainer">
          <UrlData url={inputUrl} />
          <RequestBlock1 />
          <RequestBlock2
            statusCode={statusCode}
            currentDate={FormatCurrentDate()}
          />
        </div>
        <ShareComponent />
      </div>
    </>
  );
}

export default App;
