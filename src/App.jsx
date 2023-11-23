import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"


function App() {

  return (
    <>
      <main>
      <Outlet />
      <Link />
      </main>
    </>
  )
}

export default App
