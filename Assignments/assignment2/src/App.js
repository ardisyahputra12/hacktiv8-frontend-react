import React from 'react'
import { Table } from 'react-bootstrap';
import { Thead } from './components/Thead';
import { Tbody } from './components/Tbody';

export const App = () => {
  return (
    <Table striped bordered responsive hover>
      <Thead />
      <Tbody />
    </Table>
  )
}

