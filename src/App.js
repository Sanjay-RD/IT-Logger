import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    // init material js
    M.AutoInit();
  }, []);
  return (
    <div className="App">
      <h1>IT Logger</h1>
    </div>
  );
}

export default App;
