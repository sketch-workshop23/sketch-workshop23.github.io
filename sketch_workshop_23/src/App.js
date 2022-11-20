import { useState } from "react";

import CanvasTitle from "./components/canvas_title";
import Header from "./components/header";
import ImportantDates from "./components/important_dates";

import HomePage from "./components/home_page";
import CallForPapers from "./components/call_for_papers";
import Program from "./components/program";
import Organizers from "./components/organizers";
import opera_house from "./img/opera_house.png";

import "./css/style.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Home Page");

  const pageHelper = (val) => {
    setCurrentPage(val);
  };

  let rightContent;
  let leftContent;
  switch (currentPage) {
    case "Home Page":
      leftContent = <HomePage />;
      rightContent = (
        <div>
          <ImportantDates />
          <img
            src={opera_house}
            alt="Sydney Opera House Sketch"
            id="opera_house"
          />
        </div>
      );
      break;
    case "Call for papers":
      leftContent = <CallForPapers />;
      rightContent = (
        <div>
          <ImportantDates />
          <img
            src={opera_house}
            alt="Sydney Opera House Sketch"
            id="opera_house"
          />
        </div>
      );
      break;
    case "Program":
      leftContent = <Program />;
      rightContent = (
        <div>
          <img
            src={opera_house}
            alt="Sydney Opera House Sketch"
            id="opera_house"
          />
        </div>
      );
      break;
    case "Organizers":
      leftContent = <Organizers />;
      rightContent = <div />;
      break;
    default:
      leftContent = <HomePage />;
      rightContent = <ImportantDates />;
      break;
  }

  return (
    <div>
      <title>Sketch Workshop 2023</title>
      <link rel="stylesheet" type="text/css" href="css/style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:200,300,600,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,900&display=swap"
        rel="stylesheet"
      />

      <Header currentPage={currentPage} pageHelper={pageHelper} />

      <div id="content">
        <div className="content-body">
          <CanvasTitle />
          <div className="columns">
            <div
              className="left-column"
              style={{ width: currentPage !== "Organizers" ? "70vw" : "100%" }}
            >
              {leftContent}
            </div>
            <div className="right-column">{rightContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
