import React from 'react'
import { certificates } from '../data/certificate.data'
import { CardSquare } from '../components/CardSquare'

export const Certificate = () => {
  return (
    <>
      <h2 className='text-center mb-5' id="certificate">Certificate</h2>
      <div className='d-flex flex-wrap justify-content-between'>
        {
          certificates.map(certificate => {
            return <CardSquare {...certificate} key={certificate.id} />
          }).reverse()
        }
      </div>
    </>
  )
}
