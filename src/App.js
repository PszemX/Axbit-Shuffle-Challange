import './App.css';
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [letters, setLetters] = useState([]);

  const handleInputChange = (event) => {
    const input = event.target.value.substring(0, 12);
    setText(input);
    setLetters(input.toUpperCase().split(""));
  };

  return (
    <div className="App">
      <div className="content">
        <div className="title">Axbit shuffle challenge</div>
        <div className="main-container">
          <div className="menu-bar">
            <div className="buttons-section">
              <button>Shuffle</button>
              <button>Sort</button>
            </div>
            <div className="input-section">
              <form>
                <label>
                  <input type="text" placeholder="type..." value={text} onChange={handleInputChange}/>
                </label>
              </form>
            </div>
          </div>
          <div className="display-section">
            <ul>
              {letters.map((letter, index) => (
                <li key={index}>{letter}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
