import { useLoaderData } from "react-router-dom"

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function ColorIndex() {
  const color = useLoaderData()

  return (
    <main>
      <Container fluid className="color-index-container">
        <Card className="colorCards">
          {color.map(color => {
            // couldn't deconstruct as they all are called 'value'
            const hexVal = color.hex.value
            const rgbVal = color.rgb.value
            const cmykVal = color.cmyk.value
            const nameVal = color.name.value
            const colorImg = color.image.bare
            const id = color._links.self.href
            return (
              <Card className="individualCard" key={ id } style={{ width: '14rem' }}>
                <Card.Img variant="top" src={colorImg}/>
                <Card.Body>
                  <Card.Title>SPAMTONE&trade;</Card.Title>
                  <Card.Text>
                    {hexVal}<br></br>
                    {nameVal}<br></br>
                    {rgbVal}<br></br>
                    {cmykVal}
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