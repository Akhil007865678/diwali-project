import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");

  const handleGenerate = async () => {
    try {
      const res = await axios.post("https://diwali-project.onrender.com/api/generate-message", { prompt });
      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">AI Message Generator</h1>

        <input
          type="text"
          placeholder="Enter your prompt (e.g. Diwali wish)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="input-box"
        />

        <button onClick={handleGenerate} className="generate-btn">
          Generate Message
        </button>

        {message && (
          <div className="output-box">
            <h2 className="output-title">Generated Message:</h2>
            <p className="output-text">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
