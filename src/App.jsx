import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/ ">MoviesLib</Link>
        </h2>
        <Link to="/movie/1">MoviesLib</Link>
        <Link to="/search">MoviesLib</Link>
      </nav>
      <h2>Movies Lib</h2>
    </div>
  );
};

export default App;
