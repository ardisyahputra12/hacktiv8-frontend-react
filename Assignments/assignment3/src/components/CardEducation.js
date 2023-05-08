import React from 'react'
import PropTypes from 'prop-types'

export const CardEducation = ({ organization, study, year, website, other }) => {
  return (
    <div className='shadow rounded p-3 mb-4 d-flex flex-wrap justify-content-between align-items-center'>
      <div>
        <a href={website} target='_blank' rel="noreferrer" className='text-decoration-none'>
          <h4 style={{ color: '#e74343' }}>{organization}</h4>
        </a>
        <p>{study}</p>
        <p>{other}</p>
      </div>
      <div>
        <p><strong>({year})</strong></p>
      </div>
    </div>
  )
}

CardEducation.propTypes = {
  organization: PropTypes.string.isRequired,
  study: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  other: PropTypes.string,
}
