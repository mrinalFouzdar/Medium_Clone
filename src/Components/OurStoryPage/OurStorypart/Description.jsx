import React from 'react'
import styled from "styled-components";
const Div1 =styled.div`
 /* margin:auto ; */
 margin:none;
 width:100% ;
 display: grid;
 /* padding: 40px 0px 40px 0px ; */
 grid-template-columns: 1fr 1fr;
 justify-content: space-around;
 align-items: center;
 border-top: 1px solid black;
 border-bottom: 1px solid black;
 font-size: 1.1rem;

 div {
    margin: auto;
	width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }

  .video{
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid black;
  }
 
`
const TopMarging = styled.p`
    position: relative;
    /* margin-bottom: 20px; */
    /* padding-bottom: 10px; */
	margin-top: 30px;
    font-family: 'Soehne web buch', sans-serif;
    color: #000;
    font-size: 18px;
    line-height: 127%;
    font-weight: 400;
`
const DownMarging = styled.p`
    margin-bottom: 30px ;
    font-family: 'Soehne web buch', sans-serif;
    color: #000;
    font-size: 18px;
    line-height: 127%;
    font-weight: 400;
`
const Iframe= styled.iframe`
    width:400px ;
    height:500px ;
    border:none ;
    margin-left:40px;
`


export default function Description() {
  return (
    <Div1>
        <div>
            <TopMarging>
            The best ideas can change who we are. Medium is where those ideas
            take shape, take off, and spark powerful conversations. We’re an
            open platform where over 100 million readers come to find insightful
            and dynamic thinking. Here, expert and undiscovered voices alike
            dive into the heart of any topic and bring new ideas to the surface.
            Our purpose is to spread these ideas and deepen understanding of the
            world.
            </TopMarging>
            <br />
            <DownMarging>
            We’re creating a new model for digital publishing. One that supports
            nuance, complexity, and vital storytelling without giving in to the
            incentives of advertising. It’s an environment that’s open to
            everyone but promotes substance and authenticity. And it’s where
            deeper connections forged between readers and writers can lead to
            discovery and growth. Together with millions of collaborators, we’re
            building a trusted and vibrant ecosystem fueled by important ideas
            and the people who think about them.
            </DownMarging>
        </div>
        <div className='video'>
            <Iframe  title='video' src="https://player.vimeo.com/video/467834328?api=1&background=1&mute=1&loop=1" frameborder="0"></Iframe>
        </div>
    </Div1>
  )
}
