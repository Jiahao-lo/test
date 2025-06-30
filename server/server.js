const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory storage. In production you'd use a database.
const users = {}; // token -> { username, group }
const yields = {}; // date -> { group -> [ { username, daily, total } ] }

function calculateLeaderboard(date, group) {
  if (!yields[date] || !yields[date][group]) return [];
  return yields[date][group]
    .sort((a, b) => b.total - a.total)
    .map((u, idx) => ({ rank: idx + 1, username: u.username, daily: u.daily, total: u.total }));
}

app.post('/login', (req, res) => {
  const { username, group } = req.body;
  if (!username || !group) return res.status(400).json({ error: 'username and group required' });
  const token = `${username}-${Date.now()}`;
  users[token] = { username, group, total: 0 };
  res.json({ token });
});

app.post('/submitYield', (req, res) => {
  const { token, date, daily } = req.body;
  if (!token || !date || typeof daily !== 'number') {
    return res.status(400).json({ error: 'token, date and daily required' });
  }
  const user = users[token];
  if (!user) return res.status(401).json({ error: 'invalid token' });

  user.total += daily;
  if (!yields[date]) yields[date] = {};
  if (!yields[date][user.group]) yields[date][user.group] = [];
  let existing = yields[date][user.group].find(u => u.username === user.username);
  if (existing) {
    existing.daily = daily;
    existing.total = user.total;
  } else {
    yields[date][user.group].push({ username: user.username, daily, total: user.total });
  }
  res.json({ success: true });
});

app.get('/leaderboard', (req, res) => {
  const { date, group } = req.query;
  const board = calculateLeaderboard(date, group);
  res.json(board);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
