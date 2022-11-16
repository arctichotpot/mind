import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import Dashboard from './pages/Dashboard/Dashboard'
import Board from './pages/Board/Board'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        // path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/board',
        element: <Board />,
      },
    ],
  },
])
