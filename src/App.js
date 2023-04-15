import './App.css';
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

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
                  <input type="text" placeholder="type..." />
                </label>
              </form>
            </div>
          </div>
          <div className="display-section"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
