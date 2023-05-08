import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Nav, Offcanvas } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { NavItem } from './NavItem'

export const NavBar = () => {
  const [show, setShow] = useState(false)
  const activeKey = useLocation().pathname

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      <div className='d-lg-none p-3 bg-dark d-flex justify-content-between position-fixed start-0 end-0' style={{ zIndex: 999 }}>
        <Link to='/' className='text-decoration-none' onClick={bottomToTop}>
          <h1 className='brand m-0 text-white'>Portfolio</h1>
        </Link>
        <FaBars size='35' fill='#fff' onClick={handleShow} />
      </div>
      <div className="d-none d-lg-block pt-2 pb-2 bg-dark position-fixed start-0 end-0 border-bottom" style={{ zIndex: 999 }}>
        <Nav variant="pills" defaultActiveKey='/' activeKey={activeKey} className='justify-content-center'>
          <NavItem title='Home' path='/' />
          <NavItem title='Experience' path='/experience' />
          <NavItem title='Education' path='/education' />
          <NavItem title='Skills' path='/skill' />
          <NavItem title='Certificate' path='/certificate' />
          <NavItem title='Contact' path='/contact' />
        </Nav>
      </div>
      <Offcanvas show={show} onHide={handleClose} className="bg-dark">
        <Offcanvas.Header closeButton closeVariant='white'>
          <Offcanvas.Title>
            <Link to='/' className='text-decoration-none' onClick={() => { handleClose(); bottomToTop(); }}>
              <h1 className='brand m-0 text-white'>Portfolio</h1>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey='/' activeKey={activeKey} className='h-100 d-flex flex-column justify-content-between'>
            <div className='w-100 ps-3 pe-3 d-flex flex-column align-items-center'>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Home' path='/' />
              </div>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Experience' path='/experience' />
              </div>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Education' path='/education' />
              </div>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Skill' path='/skill' />
              </div>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Certificate' path='/certificate' />
              </div>
              <div className='w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Contact' path='/contact' />
              </div>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
} 
