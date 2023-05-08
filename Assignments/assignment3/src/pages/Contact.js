import React from 'react'
import { Button, Form } from 'react-bootstrap'

export const Contact = () => {
  return (
    <>
      <h2 className='text-center mb-5' id="contact">Contact</h2>
      <div className='col-lg-8 m-auto'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="123456" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder='Halo, I want to ...' />
          </Form.Group>
          <Button variant="danger" type="button" className="w-25 mt-5 mb-3 d-block m-auto" onClick={() => alert('This feature is coming soon!')}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}
