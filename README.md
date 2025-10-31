<h1 align="center">🛍️ REACT-useReducer-DEMO
 (Users / Products / Recipes)</h1>

<p align="center">
A responsive React app that fetches real API data using <b>useReducer</b> & <b>React Router v6</b>, and displays Users, Products, and Recipes in a clean UI with animations.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/State-useReducer-green" />
  <img src="https://img.shields.io/badge/Router-React%20Router%20v6-orange" />
  <img src="https://img.shields.io/badge/Animations-Framer--Motion-purple" />
  <img src="https://img.shields.io/badge/API-DummyJSON-blue" />
</p>

---

## ✨ Features

✅ Fetch Users / Products / Recipes from API  
✅ Global state with `useReducer`  
✅ Loading states per each data type  
✅ Dynamic routes with React Router  
✅ Beautiful card UI + hover effects  
✅ Framer Motion Homepage animation  
✅ Clean project structure + modular code  

---

## 🧠 Tech Stack

| Tool | Purpose |
|------|--------|
React 18 | UI library  
React Router v6 | Routing  
useReducer | State management  
Framer Motion | Animations  
Fetch API | External data fetching  
CSS modules | Styling  

---

## 🌍 API Endpoints Used

| Data | Endpoint |
|------|---------|
Users | `https://dummyjson.com/users`  
Products | `https://dummyjson.com/products`  
Recipes | `https://dummyjson.com/recipes`  

---

## 📦 Project Structure

```
src/
 ├─ AppRouter/
 │   └─ AppRouter.jsx
 ├─ components/
 │   ├─ DataReducer/
 │   │   └─ DataReducer.jsx
 │   ├─ FetchProducts/
 │   │   └─ FetchProducts.jsx
 │   ├─ FetchRecipes/
 │   │   └─ FetchRecipes.jsx
 │   ├─ FetchUsers/
 │   │   └─ FetchUsers.jsx
 │   ├─ NavBar/
 │   │   ├─ NavBar.jsx
 │   │   └─ navBar.css
 │   └─ Layout/
 │       └─ Layout.jsx
 ├─ Pages/
 │   ├─ HomePage/
 │   │   └─ HomePage.jsx
 │   ├─ Users/
 │   │   ├─ Users.jsx
 │   │   └─ users.css
 │   ├─ Products/
 │   │   ├─ Products.jsx
 │   │   └─ products.css
 │   └─ Recipes/
 │       ├─ Recipes.jsx
 │       └─ recipes.css
 ├─ App.js
 ├─ App.css
 ├─ index.js
 └─ index.css
```

---

## 🚀 Installation & Run

```bash
# Clone repository
git clone https://github.com/YOUR-GITHUB-USERNAME/PROD-USER-REDUCER.git

cd PROD-USER-REDUCER

# Install dependencies
npm install

# Run app
npm start
```

---

## 📸 Screenshots (Add your own)

| Home | Users | Products | Recipes |
|------|-------|----------|---------|
 | 🏠   |👤   |    🛒    |    🍽️ 

---

## 🧭 Navigation

| Route | Page |
|------|------|
`/` | Home (animated)  
`/users` | Users list  
`/products` | Products catalog  
`/recipes` | Recipes viewer  

---

## ✅ Roadmap

- [ ] Add search / filtering
- [ ] Add pagination
- [ ] Global Error Boundary
- [ ] Zustand / Redux version
- [ ] Dark / Light mode

---

## 👨‍💻 Author

**Andranik Kocharyan**

GitHub: https://github.com/And-Koch  

⭐ If you like this project — please give it a star!

<p align="center">Built with React</p>
