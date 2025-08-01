# React Store

## Overview
**React Shop** is a modern e-commerce web application built with React. It allows users to browse products, view detailed information, and simulate a checkout process. The application follows best practices in React development, with a modular component structure, clean UI, and responsive design using Bootstrap.

## Features
- ✅ **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- 🛍️ **Product Catalog**: Browse and view a list of products with images
- ℹ️ **Product Details**: Detailed product view with dynamic routing
- 🧾 **Checkout Page**: Simple checkout simulation using localStorage
- 🔄 **Loading Spinner**: Shows a spinner while fetching data
- ♻️ **Reusable Components**: Organized code with separation of concerns
- ⚡ **Fast Development**: Powered by Vite for lightning-fast builds

## Technologies Used

### Frontend
- **React**: For building the user interface
- **React Router**: For page navigation and routing
- **Bootstrap 5**: For responsive design and prebuilt components
- **Context API**: For global state management (e.g., cart)

### Development Tools
- **Vite**: For fast development and optimized builds
- **ESLint**: For code quality and linting
- **npm**: Node package manager

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm (v7+)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo.git
cd store
store/
├── public/               # Static public assets
├── src/
│   ├── assets/           # Images and static files
│   ├── components/       # Reusable UI components (e.g., Navbar)
│   ├── pages/            # Main page components (Home, Product, Checkout)
│   ├── App.jsx           # Root component
│   ├── App.css           # App-level styles
│   ├── index.css         # Global styles
│   ├── main.jsx          # App entry point
├── .gitignore
├── index.html
├── package.json
├── eslint.config.js
├── vite.config.js
└── README.md
## Acknowledgements
- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [React](https://reactjs.org/) for the amazing library
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Bootstrap](https://getbootstrap.com/) for the responsive design framework