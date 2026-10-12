# URL Shortener

A full-stack URL shortener built with **React**, **Vite**, **Node.js**, **Express**, **MySQL**, **Sequelize**, and **Redis**. The project includes a frontend for creating and viewing shortened URLs and a backend with URL and authentication routes.

## Features

- Create shortened URLs from long URLs.
- View URLs associated with a user.
- Track URL click counts through a backend endpoint.
- Signup and login API endpoints.
- MySQL integration through Sequelize.
- Redis configuration included in the backend.
- React-based frontend with Vite.

> Note: This README describes the current project structure. Configure and test the database, Redis, authentication, and email integrations before deploying.

## Tech Stack

### Frontend
- React
- Vite
- Axios
- Bootstrap

### Backend
- Node.js
- Express
- Sequelize
- MySQL (`mysql2`)
- Redis client
- `dotenv`
- CORS

## Project Structure

```text
Url_Shortener/
├── Url_Shortener_Frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── style/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── Url_Shorter_Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── middleware/
│   │   ├── model/
│   │   ├── repo/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── index.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Prerequisites

Install the following before running the project:

- Node.js and npm
- MySQL
- Redis, if using the configured Redis functionality

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abhirambinil-08/Url_Shortener.git
cd Url_Shortener
```

### 2. Configure the backend

```bash
cd Url_Shorter_Backend
npm install
```

Create a `.env` file in `Url_Shorter_Backend/` and add the environment variables required by your local configuration files. Typical settings may include:

```env
PORT=3000
```

Add your database credentials and any Redis or email settings required by the code in `src/config/`. The exact variable names depend on those configuration files; check them before starting the server. **Never commit `.env` or real credentials.**

Start the backend in development mode:

```bash
npm run dev
```

Or run:

```bash
npm start
```

The server uses port `3000` by default, unless `PORT` is set. On startup, it authenticates with the database and synchronizes the Sequelize models.

### 3. Configure the frontend

Open a second terminal:

```bash
cd Url_Shortener_Frontend
npm install
npm run dev
```

Vite normally serves the frontend at `http://localhost:5173`.

The current API helper files use `http://localhost:3000` as the backend base URL. If your backend runs elsewhere, update the API configuration accordingly.

### 4. Build the frontend

From `Url_Shortener_Frontend/`:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## API Overview

The frontend currently calls these backend endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/signup` | Signup |
| `POST` | `/api/login` | Login |
| `POST` | `/api/signout` | Sign out |
| `POST` | `/api/url` | Create a shortened URL |
| `GET` | `/api/url` | Retrieve URLs for a user |
| `PUT` | `/api/updateClickCount` | Update click count |

The URL API helpers send an `x-user-id` header for URL creation, retrieval, and click-count updates. Refer to the backend route and controller files for request formats and implementation details.

## Environment and Security

- Keep credentials, tokens, and private configuration in environment variables.
- Do not commit `.env` files, API keys, database passwords, or Redis credentials.
- Use a production frontend origin in the backend CORS configuration before deployment.
- Replace local development API URLs with your deployed backend URL when deploying.
- Review authentication and authorization behavior before using the application with real users.
- Avoid committing generated build output or dependency folders unless there is a specific reason.

## Development Scripts

### Frontend

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build the frontend |
| `npm run lint` | Run Oxlint |
| `npm run preview` | Preview the production build |

### Backend

| Command | Description |
|---|---|
| `npm run dev` | Start backend with Nodemon |
| `npm start` | Start backend with Node.js |

## Current Status

This repository contains the frontend and backend code for a URL-shortening application. Setup requirements and integrations may vary by environment; verify database, Redis, authentication, and email configuration locally before deployment.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes.
4. Commit with a clear message.
5. Open a pull request.

## License

No project-level license is specified in this README. Add a license file if you decide to distribute the project under an open-source license.
