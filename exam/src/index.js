import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { HashRouter } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={ store }>
        <App/>
      </Provider>
    </React.StrictMode>
  </HashRouter>
)

reportWebVitals()
