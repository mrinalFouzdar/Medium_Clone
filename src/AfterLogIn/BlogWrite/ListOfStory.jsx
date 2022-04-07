import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    .main1{
        display:flex ;
        border-bottom:1px solid rgba(117, 117, 117, 1);
        box-sizing:border-box;
    }
    div{
        margin-right:50px ;
        margin-bottom:15px;
        cursor: pointer;

    }
    a:active{
        color:black;
        padding-bottom:15px;
        border-bottom:2px solid black ;
    }
    a{
        text-decoration: none;
        color:rgba(117, 117, 117, 1) ;

    }
   
`

export default function ListOfStory() {

    const getJsonData=()=>{
        fetch(`https://skbhardwaj.herokuapp.com/Blogs`)
        .then((res)=>res.json())
        .then((res)=>console.log(res))
    }

    React.useEffect(()=>{
        getJsonData()
    },[])
   
  return (
    <>
        <Main>
            <div className='main1'>
            <div >
                <a href="#">
                Published
                </a>
            </div>    
            <div >
                <a href="#">
                Responses
                </a>
            </div>    
            <div >
                <a href="#">
                Drafts
                </a>
            </div>    

            </div>
            <div>ava</div>

        </Main>
        {/* <hr /> */}
    </>
  )
}
