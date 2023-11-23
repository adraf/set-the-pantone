import { useLoaderData } from "react-router-dom"

// Bootstrap components
import Card from 'react-bootstrap/Card'


export default function SingleColor() {
  // loader
  const color = useLoaderData()

  const hexVal = color.hex.value
  const rgbVal = color.rgb.value
  const cmykVal = color.cmyk.value
  const nameVal = color.name.value
  const colorImg = color.image.bare
  const id = color._links.self.href
  return (
    <Card className="individualCard" key={ id } style={{ width: '20rem' }}>
      <Card.Img  variant="top" src={colorImg}/>
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
}

