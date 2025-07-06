// 🔹 /backend/routes/usage.js – Controle de uso
const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

router.get('/check-usage', async (req, res) => {
  const { userId } = req.query;
  const today = new Date().toISOString().split('T')[0];
  const { data } = await supabase.from('usos').select('*').eq('user_id', userId).eq('date', today);
  res.json({ limit: data.length >= 1 });
});

router.post('/log-usage', async (req, res) => {
  const { userId } = JSON.parse(req.body);
  const today = new Date().toISOString().split('T')[0];
  await supabase.from('usos').insert({ user_id: userId, date: today });
  res.status(200).end();
});

module.exports = router;
