import React, { useState } from "react";
import marked from "marked";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const changeTextHandler = (event) => {
    setText(event.target.value);
  };
  const markdownToHTML = () => {
    return { __html: marked(text) };
  };

  return (
    <div className="App">
      <div className="elements">
        <div className="element">
          <textarea
            value={text}
            placeholder="Entrez votre text ici"
            rows="30"
            onChange={(e) => changeTextHandler(e)}
          ></textarea>
        </div>

        <div className="element">
          <div dangerouslySetInnerHTML={markdownToHTML()}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
