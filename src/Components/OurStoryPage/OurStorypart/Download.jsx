import React from 'react'
import styled from 'styled-components'
const MainDiv=styled.div`
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    background-color: #b6e5a4;

    .col.bifold{
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        color: #000;
    }

    .col {
    width: 50%;
    padding: 30px;
    /* border: 1px none #000; */
}

    .header-1 {
        margin-top: 0px;
    margin-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
    font-family: 'Gt super text book', Georgia, sans-serif;
    color: #000;
    font-size: 7.3vw;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.35vw;
    /* margin-left:-40px; */
}

.bot-col-item.under-header {
    margin-top: 40px;
}

.bot-col-item-wrap {
    /* display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox; */
    display: flex;
    width: 40ch;
    /* -webkit-box-pack: start;
    -webkit-justify-content: flex-start; */
    -ms-flex-pack: start;
    /* justify-content: flex-start; */
    /* -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap; */
    flex-wrap: nowrap;
    font-size: 18px;
    line-height: 127%;
}

.paragraph {
    position: relative;
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-family: 'Soehne web buch', sans-serif;
    color: #000;
    font-size: 18px;
    line-height: 127%;
    font-weight: 400;
}

.app-icon {
    /* margin-left: -300px; */
}
.app-icon1{
    margin-right:30px;
}
.right-side-div{
    padding-bottom: 0px;
    padding-top: 135px;
    padding-right: 200px;
}
`

export default function Download() {
  return (
    <MainDiv>
        <div  className='col bifold'> 
            <div>
                <h2 className='header-1'>Take Medium with you.</h2>
            </div>
            <div className='bot-col-item under-header '>
                <div className='bot-col-item-wrap'>
                    <p className='paragraph'>Download our app so you can read, write, and publish wherever you are.</p>
                </div>
            </div>
            <div className='app-icon'>
                <a href="https://apps.apple.com/us/app/medium/id828256236" target="_blank" rel="noreferrer">
                    <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/AppleStore_2x.png"  alt=" " width="167" className='app-icon1'/>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.medium.reader&hl=en_US" target="_blank" rel='noreferrer'>
                    <img src="	https://cdn-static-1.medium.com/sites/medium.com/about/images/PlayStore_2x.png" alt="" width="167"/>
                </a>
            </div>
        </div>

        <div className='right-side-div'>
            <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/creator-find-points-iphones.png" alt="" width="334" />
        </div>
    </MainDiv>
  )
}
