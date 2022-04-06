import React from 'react'
import styled from "styled-components"

const Main = styled.div`
margin-top: 0% ;
  width:100% ;
  background: #ffd1b9;   
  align-items: center;
  padding-top:60px;
  padding-bottom:60px ;

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
      text-align:center ;
      margin-top: 0px;
      margin-bottom: 0px;
      padding-right: 0px;
      padding-left: 0px;
      /* padding-top:70px; */
      font-family: 'Gt super text book', Georgia, sans-serif;
      color: #000;
      font-size: 7.3vw;
      line-height: 100%;
      font-weight: 400;
      letter-spacing: -0.35vw;
    }

    .write_on_medium{
    width: 45%;
    position: relative;
    margin: 15px auto;
    margin-bottom: 20px;
    padding: 10px;
    color: #000;
    font-size: 18px;
    line-height: 127%;
    font-weight: 400;

    }
  }

    .tri-col-inner{
   
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-around;
    margin-top:50px;
  
    }

    .tri-col{
      width: 33%;
    height: 100%;
    padding-right: 1vw;
    padding-left: 1vw;
    
    }
    .tri-col.left{
      padding-right:0.5vw ;
    }

    .tri-col.mid {
    padding-right: 0.5vw;
    padding-left: 0.5vw;
    } 

    .tri-col.right {
    padding-left: 0.5vw;
    }

    .tri-col-item {
    display: flex;
    height: 80px;
    padding-top: 10px;
    padding-bottom: 10px;
    -webkit-box-align: center;
    align-items: center;
    border-top: 0.5px solid #000;
    text-decoration: none;
    &:nth-child(4) {
      border-bottom: 1px solid #000;
     
    }
}

.w-inline-block{
  max-width:100% ;
}


.tri-col-logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.blah-2 {
    font-family: 'Soehne web buch', sans-serif;
    color: #000;
    font-size: 28px;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.025vw;
    text-decoration: none;
}

.tri-col-item-name {
  display: flex;
   margin-left: 10px;

}
img{
  width:100% ;
}
  
`

const Profile1=[{img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/Erica_Dhawan_clip.png",name:"Erica Dhawan"},
              {img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-04_1tri-col-item-04.png",name:"Scott Galloway"},
              {img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-07_1tri-col-item-07.png",name:"OneZero"},
              {img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/SarahCottrell_1SarahCottrell.png",name:"Sarah Cottrell"},
              

            ]
const Profile2=[
              {img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/DevonPrice_1DevonPrice.png",name:"Devon Price"},
              {img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/KakiOkumura_1KakiOkumura.png",name:"Kaki Okumura"},           
              {img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/CarvellWallace_1CarvellWallace.png",name:"Carvell Wallace"},           
              {img:"	https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-11_1tri-col-item-11.png",name:"Forge"}
            ]
const Profile3=[
              
              {img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-03_1tri-col-item-03.png",name:"GEN"},              
              {img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/Hal_Harris_clip.png",name:"Hal H. Harris"},           
              {img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-09_1tri-col-item-09.png",name:"Elemental"},    
              {img:"https://cdn-static-1.medium.com/sites/medium.com/about/images/Level_1Level.png",name:"LEVEL"}
            ]

export default function CuriousTable() {
  return (
    <Main>
      <div className='heading'>
        <div>
        <h2>A living network of <br /> curious minds.</h2>
        </div>
      <p className='write_on_medium'>
      Anyone can write on Medium. Thought-leaders, 
      journalists, experts, and individuals with 
      unique perspectives share their thinking here. 
      You’ll find pieces by independent writers from 
      around the globe, stories we feature and leading
      authors, and smart takes on our own suite of blogs
      and publications.
      </p>
      </div>

      {/* tablle */}
      <div className='tri-col-inner'>
        <div className='tri-col left'>
        {
          Profile1.map((idx)=>(
            <div className='tri-col-item w-inline-block'>
              <div className='tri-col-logo'>
                <img src={idx.img} alt="" />
              </div>
              <div className='tri-col-item-name'>
                <h3 className='blah-2'>{idx.name}</h3>
              </div>
            </div>
          ))

        }
        </div>
        <div className='tri-col mid'>
          {

          Profile2.map((idx)=>(
            <div className='tri-col-item w-inline-block'>
             <div className='tri-col-logo'>
                <img src={idx.img} alt="" />
              </div>
              <div className='tri-col-item-name'>
                <h3 className='blah-2'>{idx.name}</h3>
              </div>
            </div>
            ))
          }

        </div>

        <div className='tri-col right'>
        {
          Profile3.map((idx)=>(
            <div className='tri-col-item w-inline-block'>
              <div className='tri-col-logo'>
                <img src={idx.img} alt="#" />
              </div>
              <div className='tri-col-item-name'>
                <h3 className='blah-2'>{idx.name}</h3>
              </div>
            </div>
          ))

        }
        </div>

      </div>
    </Main>
  )
}
