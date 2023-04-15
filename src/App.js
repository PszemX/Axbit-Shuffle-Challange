import './App.css';
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [letters, setLetters] = useState([]);
  const [defaultLetters, setDefaultLetters] = useState([]);

  const handleInputChange = (event) => {
    const input = event.target.value.substring(0, 12);
    const inputLetters = input.toUpperCase().split("");
    const formattedLetters = inputLetters.map((letter) => [letter, randomColor()]);
    setText(input);
    setLetters(formattedLetters);
    setDefaultLetters(formattedLetters);
  };

  const handleShuffleClick = () => {
    const shuffledLetters = [...letters].sort(([], []) => Math.random() - 0.5);
    setLetters(shuffledLetters);
  };

  const handleSortClick = () => {
    setLetters(defaultLetters);
  };

  const randomColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  }

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
              {letters.map((letter) => (
                <li style={{backgroundColor: letter[1]}}>{letter[0]}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
