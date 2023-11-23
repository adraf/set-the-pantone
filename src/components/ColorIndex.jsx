import { useLoaderData, Link } from "react-router-dom"
import { useState } from "react"

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

// eslint-disable-next-line react/prop-types
export default function ColorIndex() {

  // loader
  const color = useLoaderData()

  // state
  const [ pickerColor, setPickerColor ] = useState('#004CFF')

  const noHashColor = pickerColor.split('#')[1]

  return (
    <main>
      <section>
        <Form.Label hidden htmlFor="exampleColorInput"></Form.Label>
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue={ pickerColor }
          title="Choose your color"
          onChange={(e) => setPickerColor(e.target.value)}
        />
        <Link to={`/color/${noHashColor}`} className="btn">Find the colour!</Link>
      </section>
      <Container fluid className="color-index-container">
        <Card className="colorCards">
          {color.map(color => {
            // couldn't deconstruct as they all are called 'value'
            const hexVal = color.hex.value
            const nameVal = color.name.value
            const colorImg = color.image.bare
            // can use clean hex as well
            const href = color._links.self.href
            const id = href.split('=')[1]
            return (
              <Card className="individualCard shadow-sm" key={ id } style={{ width: '12rem' }}>
                <Link to={`/color/${id}`}><Card.Img  variant="top" src={colorImg}/></Link>
                <Card.Body>
                  <Card.Title>SPAMTONE&trade;</Card.Title>
                  <Card.Text>
                    {hexVal}<br></br>
                    {nameVal}<br></br>
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </Card>
      </Container>
    </main>
  )
}