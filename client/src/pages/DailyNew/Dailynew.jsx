import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./dailynew.scss"
import { Container } from 'react-bootstrap'
import Cards from './Card/Cards'

export default function Dailynew() {
  return (
    <div className='landing'>
        <div className='dark-overlay'>
            <Navbar/>
            <Container className='BodyContainer'>
                <Cards/>
            </Container>
        </div>
    </div>
  )
}
