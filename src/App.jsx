import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import Modal from './components/Modal.jsx'


function App() {

  return (
    <>
      <Modal />
      <main>
      <Outlet />
      <Link />
      </main>
    </>
  )
}

export default App
