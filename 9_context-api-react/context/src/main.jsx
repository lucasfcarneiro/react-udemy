import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//contextprovider
import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Creating provider */}
    <TitleColorContextProvider>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </TitleColorContextProvider>
  </React.StrictMode>,
)
