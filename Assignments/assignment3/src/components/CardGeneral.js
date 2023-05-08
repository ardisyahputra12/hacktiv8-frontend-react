import React from 'react'
import PropTypes from 'prop-types'

export const CardGeneral = ({ organization, title, year, website, other }) => {
  return (
    <div className='shadow rounded p-3 mb-4 d-flex flex-wrap justify-content-between align-items-center'>
      <div className='col-lg-7 col-md-7'>
        <h4>{title}</h4>
        <a href={website} target='_blank' rel="noreferrer" className='text-decoration-none'>
          <p style={{ color: '#e74343' }}>{organization}</p>
        </a>
        <p>{other}</p>
      </div>
      <div className='col-lg-3 col-md-3 text-end'>
        <p><strong>({year})</strong></p>
      </div>
    </div>
  )
}

CardGeneral.propTypes = {
  organization: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  website: PropTypes.string,
  other: PropTypes.string,
}
