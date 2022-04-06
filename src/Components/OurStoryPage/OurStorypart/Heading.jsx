import React from 'react'
import styled from "styled-components"
 const Div1 = styled.div`
 height:300px ;
 width:100% ;
 `
 const Div2 = styled.div`
     font-family: "GT-Super-Text-Book";
    font-size:2.9rem ;
    font-weight: 100 ;
    /* display: flex ; */
    justify-content:center ;
    align-items:center ;
    width:100% ;
    padding: 100px 0px 100px 0px;
    line-height: 2.9rem;
    color: rgb(51, 51, 51); 
    text-align: center;
  
 `
 const Span = styled.span`
    color: black;
    font-weight: 1500;
 `
export default function Heading() {
  return (
    <Div1>
        <Div2>
            <h1>
            Every idea needs a <Span>Medium.</Span> 
            </h1>
        </Div2>
   </Div1>
  )
}
