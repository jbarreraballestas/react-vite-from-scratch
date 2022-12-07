import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const el = document.getElementById('root');

if (el) {
  ReactDOM.createRoot(el).render(
    <>
    <h1 className="text-3xl font-bold underline">Hello World</h1>
    </>
  );
} else {
  document.querySelector('body').insertAdjacentHTML('beforeend', '<h1>Root element with id "root" for react not found</h1>')
}