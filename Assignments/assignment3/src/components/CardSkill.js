import React from 'react'
import PropTypes from 'prop-types'

export const CardSkill = ({ title, skills }) => {
  return (
    <div className='mb-5'>
      <h4>{title}</h4>
      <div className='d-flex flex-wrap'>
        {
          skills.map(skill => {
            return <span
              className='p-2 ps-4 pe-4 m-2'
              style={{
                backgroundColor: skill.bg,
                color: skill.color,
                borderRadius: '50px'
              }}
              key={skill.id}
            >
              {skill.name}
            </span>
          })
        }
      </div>
    </div>
  )
}

CardSkill.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
}
