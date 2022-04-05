import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import styles from "./NavStyle.css"
const Maindiv=styled.div`
border-bottom:1px solid black;

`
const Nav = styled.div`
height: 85px;
position:sticky;
top:0px;
z-index:100;
display: flex;
justify-content: space-between;
align-items: center;
width:90vw;
padding-left:100px;
padding-right:38px;

background:${props => (props.color) ? props.color : "white"}; 
`
export default function Navbar() {
  return (
    <>

    <Nav>
        <div>
          <Link to="/">Home </Link>
          </div>
        <Link to="/ourStory">Our Story</Link>
    </Nav>
    </>
  )
}
