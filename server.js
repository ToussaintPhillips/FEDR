const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(express.json()); // For parsing application/json

// Load environment variables
require('dotenv').config();

// OpenAI configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Endpoint to handle post requests
app.post('/api/openai', async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // Or any other model
      prompt: req.body.prompt, // Text from the frontend
      max_tokens: 150,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
