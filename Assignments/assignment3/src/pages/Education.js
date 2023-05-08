import React from 'react'
import { CardEducation } from '../components/CardEducation'
import { educations } from '../data/education.data'

export const Education = () => {
  return (
    <>
      <h2 className='text-center mb-5' id="education">Education</h2>
      {
        educations.map(education => {
          return <CardEducation {...education} key={education.id} />
        }).reverse()
      }
    </>
  )
}
