import React from 'react'
import styled from "styled-components"

const Main = styled.div`
margin-top: 0% ;
  width:100% ;
  background: #ffd1b9;   
  align-items: center;

  .heading{
    /* width: 65%;
    margin: auto;
    font-size: 6rem;
    line-height: 6rem;
    font-family: "GT-Super-Text-Book";
    font-weight: 600;
    p {
      margin-top:0px;
      padding-top: 70px;
    } */
    h2{

      margin-top: 0px;
      margin-bottom: 0px;
      padding-right: 0px;
      padding-left: 0px;
      padding-top:70px;
      font-family: 'Gt super text book', Georgia, sans-serif;
      color: #000;
      font-size: 7.3vw;
      line-height: 100%;
      font-weight: 400;
      letter-spacing: -0.35vw;
    }
  }
`

export default function CuriousTable() {
  return (
    <Main>
      <div className='heading'>
        <h2>A living network of <br /> curious minds.</h2>
      </div>
    </Main>
  )
}
