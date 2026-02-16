# Portfolio

A modern MERN portfolio website built with Express, EJS, MongoDB, Bootstrap, HTML, CSS, and JavaScript.

## Repository

https://github.com/gokul1sahoo/Portfolio.git

## Features

- Server-rendered EJS templates
- MongoDB for dynamic content (with fallback to static data)
- Responsive Bootstrap layout
- Sections: Hero, About, Skills, Projects, Experience, Education, Contact
- Smooth scroll animations
- Modern glass-morphism design

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your MongoDB URI (optional).

3. **Run in development:**

   ```bash
   npm run dev
   ```

4. **Seed database (optional):**

   ```bash
   npm run seed
   ```

5. **Visit:** http://localhost:3000

## Project Structure

```
Portfolio/
├── public/           # Static assets (CSS, JS)
├── src/
│   ├── controllers/  # Route handlers
│   ├── data/         # Fallback data
│   ├── models/       # MongoDB schemas
│   ├── routes/       # Express routes
│   └── seed/         # Database seeder
├── views/            # EJS templates
└── server.js         # Entry point
```

## Deployment

The site works with or without MongoDB. If `MONGO_URI` is not set, it uses fallback data from `src/data/siteData.js`.

### Render

- Build command: `npm install`
- Start command: `npm start`
- Seed (optional): run `npm run seed` manually from the Render shell when `MONGO_URI` is configured

## License

MIT

## to See live the website

https://portfolio-6pga.onrender.com
