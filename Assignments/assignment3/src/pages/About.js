import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='d-flex flex-wrap justify-content-between align-items-center mt-5'>
      <div className='col-lg-6 pb-5 text-center'>
        <img
          src={process.env.PUBLIC_URL + '/img/ardi-saputra.jpg'}
          alt='ardi-saputra'
          width='70%'
          className='rounded-circle shadow' />
      </div>
      <div className='col-lg-6 pb-5'>
        <h2 className='pb-4' style={{ fontSize: '48px', fontWeight: 700 }}>
          Ardi Saputra
          <br />
          <strong style={{ color: '#e74343', fontSize: '42px', fontWeight: 500 }}>
            Fullstack Developer
          </strong>
        </h2>
        <p style={{ fontSize: '18px' }}>
          Halo, this is my portfolio.
          <br /> My passion is about software development and I like to coding. My skill in programming is started in 2020. I have studied round about frontend web development, backend development, and mobile development (android). I am a capable of teamwork, responsible, adaptable, and I am willing to learn new things.
        </p>
        <div>
          <Link to='https://github.com/ardisyahputra12' className='me-4'>
            <FaGithub size='40' fill='#fff' />
          </Link>
          <Link to='https://www.linkedin.com/in/ardisaputra2022/' className='me-4'>
            <FaLinkedin size='40' fill='#fff' />
          </Link>
        </div>
      </div>
    </div>
  )
}
