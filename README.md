# SRTMart - Premium E-Commerce Application

A modern, responsive e-commerce application built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Product Catalog**: Browse products from the Fake Store API
- **Categories**: Filter products by category (men's clothing, women's clothing, jewelry, electronics)
- **Product Details**: View detailed product information with ratings and reviews
- **Shopping Cart**: Add, remove, and update quantities of products
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface with Tailwind CSS

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API with useReducer
- **API**: Fake Store API (https://fakestoreapi.com)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with cart
│   └── ProductCard.tsx # Product display card
├── pages/              # Route components
│   ├── Home.tsx        # Landing page
│   ├── Products.tsx    # Product listing page
│   ├── ProductDetail.tsx # Individual product page
│   ├── Cart.tsx        # Shopping cart page
│   ├── Categories.tsx  # Category browsing page
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
│   └── useCart.tsx     # Cart state management
├── services/           # API services
│   └── api.ts          # Fake Store API integration
├── types/              # TypeScript type definitions
│   └── index.ts        # Product and cart types
└── utils/              # Utility functions
```

## Features Overview

### Home Page
- Hero section with call-to-action buttons
- Featured products showcase
- Category navigation
- Feature highlights

### Products Page
- Grid layout with responsive design
- Category filtering
- Loading states and error handling
- Product cards with hover effects

### Product Detail Page
- Large product images
- Detailed product information
- Star ratings display
- Add to cart functionality

### Shopping Cart
- Persistent cart state
- Quantity management
- Price calculations
- Checkout summary

### Categories Page
- Category overview with icons
- Product filtering by category
- Interactive category selection

## API Integration

The application uses the Fake Store API for product data:

- **GET /products** - Fetch all products
- **GET /products/{id}** - Fetch product by ID
- **GET /products/category/{category}** - Fetch products by category
- **GET /categories** - Fetch all categories

## Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized images and loading

## State Management

Cart state is managed using React Context API with useReducer for:
- Adding products to cart
- Removing products from cart
- Updating product quantities
- Calculating totals

## License

This project is open source and available under the [MIT License](LICENSE).
