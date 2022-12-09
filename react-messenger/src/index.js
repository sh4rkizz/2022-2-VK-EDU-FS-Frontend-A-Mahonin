import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'

import reportWebVitals from './reportWebVitals'
import App from './App'
import {store} from './store'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <HashRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    </HashRouter>
)

reportWebVitals()
