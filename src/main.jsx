import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import Contaxt from './ContaxApi/Contaxt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contaxt>
    <RouterProvider router={router}/>
    </Contaxt>
   </React.StrictMode>,
)
