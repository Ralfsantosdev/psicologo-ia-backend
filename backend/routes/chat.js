// 🔹 /backend/routes/chat.js – Endpoint da OpenAI
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/chat', async (req, res) => {
  const { messages } = req.body;

  const prompt = {
    role: 'system',
    content: `Você é um psicólogo empático, ético e acolhedor. Use empatia, escuta ativa e técnicas de TCC.`
  };

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({ model: 'gpt-4o', messages: [prompt, ...messages] }),
  });

  const data = await response.json();
  res.json({ reply: { role: 'assistant', content: data.choices[0].message.content } });
});

module.exports = router;
