import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// Page components
import ColorIndex from './components/ColorIndex.jsx'
import SingleColor from './components/SingleColor.jsx'

// Loaders
import { getAllColors, getSingleColor } from './utils/loaders/colors.js'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/main.scss'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <ColorIndex />,
          loader: getAllColors
        },
        {
          path: "/color/:colorID",
          element: <SingleColor />,
          // loader: getSingleColor
          loader: async ({ params }) => getSingleColor(params.colorID)
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
