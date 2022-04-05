import React from 'react'
import styled from 'styled-components'
 const Wrapper1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid black;

  .header1 {
    padding: 30px 30px;
    font-family: Gt-Super-Text-Book;
    font-size: 5.6rem;
    border-right: 1px solid black;
  }
   .h4tag{
    padding-right: 100px;
    margin-top: -30px;
    font-size: 7.3vw;
   }

  .divWrap {
    display: flex;
    flex-direction: column;
  }

  .secDiv {
    display: flex;
    flex-direction: column;
    padding: 30px 30px;
    border-bottom: 1px solid black;

    h4 {
     font-family: 'Gt super text book', Georgia, sans-serif;
      font-size: 2.4rem;
      width: 60%;
      margin-bottom: 0px;
      margin-top: 0px;
    }
    p {
      font-size: 1.2rem;
      /* padding: 15px 0px; */
      width: 60%;
      margin-top: 0px;
      padding-top: 5px;
    }
    button {
      width: 30%;
      font-size: 1.4rem;
      border: 1px solid rgb(52, 162, 69);
      color: rgb(52, 162, 69);
      border-radius: 25px;
      padding: 5px 6px;
      background: white;
      outline: none;
      margin-top: 100px;
      &:hover{
          background:rgb(52, 162, 69) ;
          color:white ;
      }
    }
    .positions {
      width: 40%;
    }
  }

  .secDiv2 {
    display: flex;
    flex-direction: column;
    padding: 30px 30px;

    h4 {
      font-family: 'Gt super text book', Georgia, sans-serif;
      font-size: 2.4rem;
      width: 60%;
      margin-bottom: 0px;
      margin-top: 0px;
    }
    p {
      font-size: 1.2rem;
      /* padding: 15px 0px; */
      width: 60%;
      margin-top: 0px;
      padding-top: 5px;
    }
    button {
      width: 30%;
      font-size: 1.4rem;
      border: 1px solid rgb(52, 162, 69);
      color: rgb(52, 162, 69);
      border-radius: 25px;
      padding: 5px 6px;
      background: white;
      outline: none;
      margin-top: 100px;
      &:hover{
          background:rgb(52, 162, 69) ;
          color:white ;
      }
    }
    .positions {
      width: 40%;
    }
  }
`;
 const Wrapper2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;

  .cube {
    display: flex;
    justify-content: center;
  }
  .register {
    display: flex;
    flex-direction: column;
    font-family: Gt-Super-Text-Book;
    font-size: 5.9rem;
    line-height: 5.9rem;
    padding: 20px;
    justify-content: space-around;
    border-left:1px solid black ;
  }
  button {
    width: 200px;
    font-size: 1.3rem;
    padding: 7px 23px;

    border-radius: 30px;
    border: none;
    color: white;
    background: rgb(52, 162, 69);
    margin-top: 90px;

    &:hover{
        background-color:black ;
    }
  }
`;

export default function LearnMore() {
  return (
    <>
    <Wrapper1>
        <div className="header1">
          <h4 className='h4tag'> Learn more about us. Or join us.</h4>
        </div>
        <div className="divWrap">
          <div className="secDiv">
            <h4>The Medium blog.</h4>
            <p>
              Visit our company blog for the latest news, product updates, and
              tips and tricks.
            </p>
            <button> Read our blog</button>
          </div>
          <div className="secDiv2">
            <h4>Work at Medium</h4>
            <p>
              Our team is home to engineers, journalists, artists, and creatives
              of all stripes.
            </p>
            <button className="positions"> View open positions</button>
          </div>
        </div>
      </Wrapper1>
      <Wrapper2>
        <div className="cube">
          <iframe
            src="https://player.vimeo.com/video/448735219?api=1&background=1&mute=1&loop=1"
            frameBorder="0"
            title="svg cube"
            width="500"
            height="500"
          ></iframe>
        </div>
        <div className="register">
          <p>Read, write, and expand your world.</p>
          <button> Get started</button>
        </div>
      </Wrapper2>
    </>
  )
}
