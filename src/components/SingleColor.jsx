import { useLoaderData } from "react-router-dom"

// Bootstrap components
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom"

export default function SingleColor() {
  // loader
  const data = useLoaderData()
  console.log(data)
  const hexVal = data.singleColor.hex.value
  const rgbVal = data.singleColor.rgb.value
  const cmykVal = data.singleColor.cmyk.value
  const nameVal = data.singleColor.name.value
  const colorImg = data.singleColor.image.bare
  const id = data.singleColor._links.self.href
  return (
    <main className="main-single-color">
      <section className="single-color-top-section">
        <Link className='btn' to="/">Back</Link>
        <section className="section-single-color">
          <Card className="individualCard shadow-sm" key={ id } style={{ width: '20rem' }}>
            <Card.Img  variant="top" src={colorImg}/>
            <Card.Body>
              <Card.Title>SPAMTONE&trade;</Card.Title>
              <Card.Text className="description-text">
                {hexVal}<br></br>
                {nameVal}<br></br>
                {rgbVal}<br></br>
                {cmykVal}
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
      </section>
      <section className="single-color-scheme">
        <Container fluid className="color-index-container">
          <Card className="colorCards border-0">
            {data.singleColorScheme.map(color => {
              // couldn't deconstruct as they all are called 'value'
              const hexVal = color.hex.value
              const nameVal = color.name.value
              const colorImg = color.image.bare
              // can use clean hex as well
              const href = color._links.self.href
              const id = href.split('=')[1]
              return (
                <Card className="individual-scheme-cards shadow-sm" key={ id } style={{ width: '10.5rem' }}>
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
      </section>
    </main>
  )
}

