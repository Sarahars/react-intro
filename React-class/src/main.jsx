import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Test from "./test"
import Navbar from './navbar'
import App from './App' // default import
import {x, y, z} from './App'  // non default



ReactDOM.render(
  <React.StrictMode>
<Navbar/>
<App/>
<App/>
<Test/>

  </React.StrictMode>,
  document.getElementById('root')
)
