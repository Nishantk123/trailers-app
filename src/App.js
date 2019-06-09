import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TailerList from "./Component/TailerList";
import Video from "./Component/Video";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/video-react/dist/video-react.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={TailerList} />
        {/* <Route exact path="/video" component={Video} /> */}
      </div>
    </Router>
  );
}

export default App;
