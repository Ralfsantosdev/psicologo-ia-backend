// 🔹 /backend/server.js – Servidor Express principal
const express = require('express');
const app = express();
const chatRoute = require('./routes/chat');
const usageRoute = require('./routes/usage');
require('dotenv').config();

app.use(express.json());
app.use('/chat', chatRoute);
app.use('/api', usageRoute);

app.listen(4000, () => console.log('Backend rodando na porta 4000'));


