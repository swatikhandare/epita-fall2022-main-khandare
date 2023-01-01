import React from 'react'
import ReactDOM from 'react-dom/client'
import { Animals } from './app'
import Router from './router'
import './styles/index.scss'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Animals/>
    <Router/>
  </React.StrictMode>
)
