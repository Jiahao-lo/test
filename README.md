# Stock Competition Mini Program Backend

This repository contains a minimal example backend server for a WeChat mini program
that runs a stock trading competition. The server provides endpoints for user
login, submitting daily profit/loss, and fetching leaderboard data.

## Features
- User login with group selection (100万以上, 50-100万, 50万以下)
- Submit daily yield data
- Get leaderboard by date and group

## Setup
Install dependencies and start the server:

```bash
cd server
npm install
node server.js
```

The server listens on port `3000`. It uses in-memory storage for demo purposes.
In production, replace it with a persistent database.

## Mini Program Skeleton
The `miniprogram` directory contains a very basic WeChat mini program with three pages:

- `pages/login` – user login and group selection
- `pages/upload` – submit daily yield
- `pages/leaderboard` – display rankings for the current day

This is just a starting point and does not include styling or advanced error handling.
