import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

export const CardSquare = ({ organization, title, year, img, url }) => {
  return (
    <Card className='col-lg-3 col-md-5 m-3 text-dark'>
      <Card.Link href={url}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + `/img/${img}`} alt={title} />
      </Card.Link>
      <Card.Body className='d-flex flex-column justify-content-between'>
        <div>
          <Card.Subtitle className="mb-2" style={{ color: '#e74343' }}>
            {organization}
          </Card.Subtitle>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{year}</Card.Text>
        </div>
        <Card.Link href={url} className='btn btn-sm btn-outline-danger mt-3 w-100'>Show</Card.Link>
      </Card.Body>
    </Card>
  )
}

CardSquare.propTypes = {
  organization: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
