# organic-store-app
# Organic Store React App

A simple React-based organic store website demonstrating React fundamentals, state management, and event handling.

## Project Overview

This project is built as part of an 8-week roadmap to develop a React e-commerce app with public/protected routes and deployment on Vercel.

### Week 1

- Project setup using Create React App (CRA)
- React fundamentals: JSX, components, props
- Linting and Prettier setup
- Initial repository setup on GitHub

### Week 2

- State & Event Handling with `useState`
- Created `ProductCard` and `ProductList` components
- Added "Add to Cart" button functionality
- Basic styling using CSS (in `App.css` or component-level CSS)

## Features

- Product listing with dynamic rendering
- Button state toggling on adding items to cart
- Responsive layout with flexbox

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn package manager

### Installation

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/organic-store.git
   ```

2. Install Dependencies
   ```bash
   cd organic-store-app
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173/ to view the app in the browser.

## Folder Structure
   src/
├── components/
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
├── App.css
├── App.jsx
└── index.js

## Next Steps
- Implement React Router for routing and protected routes (Week 3)

- Add authentication context and global state management (Week 4)

- Integrate API and live data fetching (Weeks 7+)