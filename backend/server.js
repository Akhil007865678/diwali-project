import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Simple message generator endpoint
app.post("/api/generate-message", (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  let message = "";

  if (prompt.toLowerCase().includes("diwali")) {
    message = "Hello {name}, Diwali greetings! We wish you the best holiday. Namaste!";
  } else if (prompt.toLowerCase().includes("new year")) {
    message = "Hello {name}, wishing you a Happy New Year 🎉. May this year bring you joy and success!";
  } else {
    message = `Hello {name}, here’s a message based on your prompt: "${prompt}"`;
  }

  return res.json({ message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
