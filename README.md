# CRWN Clothing

A React e-commerce application with Firebase authentication and Firestore-backed product data.

## Features

- Browse product categories and category detail pages
- User authentication (Google sign-in and email/password)
- Shopping cart management with quantity updates
- Checkout flow with order total calculation
- Persisted Redux state for cart and user session

## Tech Stack

- React 18
- React Router
- Redux + Redux Toolkit + Reselect
- Firebase (Auth + Firestore)
- Styled Components and Sass
- Create React App

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run locally

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Runs tests in watch mode
- `npm run build` - Builds a production bundle in `build/`
- `npm run deploy` - Deploys the production build to GitHub Pages

## Project Structure

- `src/routes/` - Route-level pages (home, shop, auth, checkout)
- `src/components/` - Reusable UI components
- `src/store/` - Redux slices/reducers/actions/selectors
- `src/utils/firebase/` - Firebase setup and helper utilities

## Deployment

This project uses `gh-pages` for deployment:

```bash
npm run deploy
```

If needed, ensure `homepage` is configured correctly in `package.json` for your GitHub Pages URL.
