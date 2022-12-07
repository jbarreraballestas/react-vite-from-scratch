## React project with vite from scratch
### Initialize npm project
```
npm init
```

### Install vite
```
npm i -D vite @vitejs/plugin-react
```

### Install React
```
npm i react react-dom
```

### Configure
> vite.conf.js
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```
### Create main component for app
> src/main.jsx
```
import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root');

if (el) {
  ReactDOM.createRoot(el).render(
    <>
    <h1>Hello World</h1>
    </>
  );
} else {
  document.querySelector('body').insertAdjacentHTML('beforeend', '<h1>Root element with id "root" not found</h1>')
}
```

### Create index
> index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React with vite from scratch</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./src/main.jsx"></script>
</body>
</html>
```

### Install tailwind css
```
npm install -D tailwindcss postcss autoprefixer
```

### Init tailwind config
```
npx tailwindcss init -p
```
### Update tailwind config
> tailwind.config.cjs
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Create css
> src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Import css
> src/main.jsx
```
import './index.css'
```