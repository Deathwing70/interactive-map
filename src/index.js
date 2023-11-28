import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './app/store'
import Root from './routes/root'
import ErrorPage from './error-page'
import KrasnoeBedstvieMap from './KrasnoeBedstvieMap'
import Vzvod from './Vzvod'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'krasnoe-bedstvie',
                element: <KrasnoeBedstvieMap />,
            },
            {
                path: 'vzvod',
                element: <Vzvod />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
