import React from 'react'
import styled from 'styled-components'
const header = "Create the space for your thinking to take off.";
const body =
  "A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.";

const header2 = "Get more with membership.";
const body2 =
  "Become a Medium member to enjoy unlimited access for $5/month and directly support the writers you read most.";


const Wrapper = styled.div`
background:black ;

.headerDiv{
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 6rem;
    color: white;
    font-family: "GT-Super-Text-Book";
    line-height: 6rem;
    .headerDivLeft {
           padding: 35px 0px;
          border-right: 1px solid white;
          border-bottom: 1px solid white; 
    
            margin-top: 0px;
            margin-bottom: 0px;
            font-family: 'Gt super text book', Georgia, sans-serif;
            color: #fff;
            font-size: 7.3vw;
            line-height: 100%;
            font-weight: 400;
            letter-spacing: -0.4vw;
            .ptag1 {
                /* width: 90%; */
                padding-right:100px;
                padding-left:50px;
    
            margin: 30px auto;
          }
        }
    
        .headerDivRight{
            font-size: 1.4rem;
            line-height: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px 40px;
            border-bottom: 1px solid white;
        img {
            width: 150px;
            border-radius: 50%;
        }
        p {
            margin-top: 20px;
            margin-left: 20px;
            width: 90%;
            span {
            display: block;
            padding: 25px 0px;
            }
        }
   } 

  
}


`

const BannerWrapper = styled.div`
background: ${(prop) => prop.background};
text-align: center;
width: 100%;
color: ${(prop) => prop.font};
.netWorkHeader {
  width: ${(prop) => (prop.width ? prop.width : "85%")};
  margin: auto;
  font-size: 6rem;
  line-height: 6rem;
  font-family: "GT-Super-Text-Book";
  font-weight: 600;
  padding-top: 70px;
}
.netWorkBody {
  width: 45%;
  margin: 15px auto;
  font-size: 1.05rem;
  padding: 25px 0px;
  font-weight: 600;
}

button {
  border: ${(prop) => (prop.fontColor ? prop.fontColor : prop.color)} solid
    1px;
  font-size: 1.3rem;
  padding: 7px 23px;
  color: ${(prop) => (prop.fontColor ? prop.fontColor : prop.color)};
  border-radius: 30px;
  background: ${(prop) => prop.background};
  margin-bottom: 55px;
  margin-top: 25px;
  &:hover {
background-color: white;
color:black ;
}
}
`;

const SubBannerBlockWrapper = styled.div`
  display: grid;
  height: 380px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  grid-template-columns: 1fr 1fr;
  background: rgb(52, 162, 69);
  font-size: 1.1rem;
  font-weight: 500;

  .firstDiv {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    text-align: left;
    flex-direction: column;
    border-right: 1px solid black;
    padding: 30px 30px;
    .header {
      font-family: Gt-Super-Text-Book;
      font-size: 2.5rem;
    }
  }
  .secondDiv {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    text-align: left;
    flex-direction: column;
    padding: 30px 30px;
    .header {
      font-family: Gt-Super-Text-Book;
      font-size: 2.5rem;
    }
  }

  img {
    height: 120px;
  }
`;


export default function Testimony() {
  return (
      <>
    <Wrapper>
        <div className='headerDiv'>
            <div className='headerDivLeft' >
                <p className='ptag1'>Over 100 <br /> million reader and growing.</p>
            </div>
            <div className='headerDivRight'>
                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/About_Bina-1.png" alt="" />
                <p>
                "There’s no other place that combines such an excellent level of
                 writing with a truly engaged and active community. Medium is truly
                 where ideas are born, shared, and spread."
                </p>
                <span>Jasmine Bina</span>
            </div>
        </div>

        {/* Banner */}

        <Banner
          header={header}
          body={body}
          button={"Write on Medium"}
          color={"rgb(52,162,69)"}
          background={"black"}
          font={"white"}
        />
        <Banner
          header={header2}
          body={body2}
          button={"See member options"}
          color={"black"}
          font={"black"}
          background={"rgb(52,162,69)"}
          fontColor={"white"}
          width={"60%"}
        />
       
    </Wrapper>
    <SubBannerBlock/>
    </>
  )
}

export const Banner = ({
    header,
    body,
    button,
    color,
    background,
    font,
    fontColor,
    width,
  }) => {
    return (
      <>
        <BannerWrapper
          color={color}
          background={background}
          font={font}
          fontColor={fontColor}
          width={width}
        >
          <p className="netWorkHeader"> {header} </p>
          <p className="netWorkBody"> {body}</p>
          <button>{button}</button>
        </BannerWrapper>
      </>
    );
  };

  export const SubBannerBlock = () => {
    return (
      <>
        <SubBannerBlockWrapper>
          <div className="firstDiv">
            <p className="header"> Read as much as you want. </p>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/about/images/UnlimitedReading.svg"
              alt=""
            />
            <p>
              
              Enjoy unlimited access to every story across all of your devices.
            </p>
          </div>
          <div className="secondDiv">
            <p className="header"> Reward quality content. </p>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/about/images/SupportWriters.svg
              "
              alt=""
            />
            <p>
              
              Your membership helps us pay writers, and keeps your experience
              ad-free.
            </p>
          </div>
        </SubBannerBlockWrapper>
      </>
    );
  };
