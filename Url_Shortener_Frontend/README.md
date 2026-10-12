# shorter_url

A full-stack URL shortener with user accounts, custom short codes, and a React dashboard to manage your links.

## Features

- User signup/login
- Generate short codes for any URL
- Dashboard listing all URLs created by the logged-in user
- Simple header-based auth (`x-user-id`) — see Roadmap for JWT migration

## Tech Stack

**Frontend:** React (Vite), plain CSS
**Backend:** Node.js, Express (ESM)
**Database:** MySQL

## Architecture

**Backend** (`Backend-url`, port `3000`)
```
server.js → index.js → src/config/database.js
routes/        auth.Route.js, url.Route.js
controllers/    → services/ → repositories/ → models/ (user.js, url.js)
middleware/     auth.middleware.js
utils/          generateCode.js
```

**Frontend** (`Frontend-url`, port `5173`)
```
App.jsx
 └─ Home.jsx
     └─ login.jsx
         └─ Dashboard.jsx
             ├─ ShortenForm.jsx
             └─ UrlTables.jsx
                 └─ UrlRow.jsx

api/  auth.js, url.js
style/ Hero, Dashboard, ShortenForm, UrlTable (per-component CSS)
```

- API base: `http://localhost:3000`
- Endpoints: `/api/signup`, `/api/login`, `/api/url`
- Frontend sends `x-user-id` header on URL requests
- CORS enabled for `localhost:5173`

## Setup

```bash
git clone <repo-url>
cd shorter_url

# Backend
cd Backend-url
npm install
cp .env.example .env
npm run dev   # runs on :3000

# Frontend
cd ../Frontend-url
npm install
npm run dev   # runs on :5173
```

## Environment Variables

**Backend-url/.env**

| Variable | Description |
|---|---|
| `DB_HOST` | MySQL host |
| `DB_USER` | MySQL user |
| `DB_PASSWORD` | MySQL password |
| `DB_NAME` | Database name (`url_shortener`) |
| `PORT` | Server port (default `3000`) |

## Screenshots

_(Add screenshots of the login screen and dashboard with a shortened URL.)_

## Known Limitations

- Auth uses an `x-user-id` header instead of JWT — not production-safe
- Passwords are not yet hashed (bcrypt pending)
- Short code generation uses `Math.random().toString(36)` — not collision-checked
- No client-side routing (React Router not yet integrated)
- No copy-to-clipboard on generated short URLs
- No delete functionality for URLs

## Roadmap

- [ ] Replace `x-user-id` header auth with JWT
- [ ] Hash passwords with bcrypt
- [ ] Add React Router
- [ ] Add copy-to-clipboard button
- [ ] Add delete URL feature

## License

MIT
