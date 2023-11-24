import { useState } from "react"

// Bootstrap components
import Modal from 'react-bootstrap/Modal'

  export default function RunModal() {
 // Effects
  const [show, setShow] = useState(true)

      return (
        <>
          <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
            <Modal.Header className="modal-header" closeButton onClick={() => setShow(false)}>
              <section className="modal-section" >
                <h1>SPAMTONE&trade;</h1>
                <p>Choose from some colour inspiration or use the search tool to look for your specific colour</p>
              </section>
            </Modal.Header>
          </Modal>
        </>
      )
    }
