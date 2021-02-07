import React, { Fragment, useEffect } from "react";
import "./App.css";

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    // init material js
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
        <AddBtn />
        <AddLogModal />
      </div>
    </Fragment>
  );
}

export default App;
