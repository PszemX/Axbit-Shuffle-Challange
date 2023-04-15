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

  const handleShuffleClick = () => {
    const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);
    setLetters(shuffledLetters);
  };

  const handleSortClick = () => {
    setLetters(text.toUpperCase().split(""));
  };

  return (
    <div className="App">
      <div className="content">
        <div className="title">Axbit shuffle challenge</div>
        <div className="main-container">
          <div className="menu-bar">
            <div className="buttons-section">
              <button onClick={handleShuffleClick}>Shuffle</button>
              <button onClick={handleSortClick}>Sort</button>
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
