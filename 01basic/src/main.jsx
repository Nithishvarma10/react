import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const reacter = React.createElement(
  'a', 
  { href: 'https://google.com', target:'_blank' },
  'visit google'
)

createRoot(document.getElementById('root')).render(
  reacter
   
)
