import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ClassCmp from './classCmp'
import FuncCmp from './funcCmp'


ReactDOM.render(
  <React.StrictMode>
  <ClassCmp title="Class component"/>
  <FuncCmp title="Functional component" count={12}/>
  </React.StrictMode>,
  document.getElementById('root')
)
