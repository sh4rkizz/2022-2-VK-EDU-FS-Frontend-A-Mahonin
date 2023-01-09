import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

// @ts-expect-error
const root = createRoot(document.getElementById('root'))

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
