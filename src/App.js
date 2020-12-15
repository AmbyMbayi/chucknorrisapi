import React, { useState } from "react";
import "./App.css";

import { fetchCategories, fetchCategoryJoke } from "./api";

function App() {
  const [jokes, setJokes] = useState(null);

  return (
    <div className="App">
      <h1 onClick={fetchCategoryJoke}>Chucknorris APP</h1>

      <div className="jokes">
        {jokes &&
          jokes.map((joke, index) => {
            return (
              <div>
                <a href="">{joke}</a>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
