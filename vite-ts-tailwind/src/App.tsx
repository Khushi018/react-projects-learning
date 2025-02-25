import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./router-dom/Home"
import About from "./router-dom/About"
import DashBoard from "./router-dom/Dashboard"
import NavBar from "./router-dom/NavBar"
import ParamCompo from "./router-dom/ParamCompo"
import './index.css'


const routes = createBrowserRouter(
  [
    {
      path: "/", element:
        <div>
          < NavBar />
          <Home />
        </div>
    },
    {
      path: "/about", element:
        <div>
          < NavBar />
          <About />
        </div>
    },
    {
      path: "/dashboard", element: <div>
        < NavBar />
        <DashBoard />
      </div>
    },

    {
      path: "/student/:id", element: <div>
        < NavBar />
        <ParamCompo />
      </div>
    }
  ]
)

function App() {
  return (
    <>
      <RouterProvider router={routes} />


    </>
  )
}

export default App
