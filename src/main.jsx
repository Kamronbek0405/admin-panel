import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './config/clinets.js'

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={client}>
        <BrowserRouter  >
            <App />
        </BrowserRouter>
    </QueryClientProvider>

)
