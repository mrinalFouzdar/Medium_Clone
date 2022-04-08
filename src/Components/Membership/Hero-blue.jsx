import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
export const AccessButton = styled.button`
  font-family: "Soehne web buch", sans-serif;
  background: #fff;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: -0.2px;
  cursor: pointer;
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-style: bold;
  border: 1px solid #fff;
  border-radius: 20px;
  margin-top: 2%;
  &:hover {
    background: transparent;
  }
`;
const CyanAccessButton = styled(AccessButton)`
  background: black;
  color: #fff;
  &:hover {
    background: #222;
  }
`;
export const Bluediv = styled.div`
  box-sizing: border-box;
  background-color: #4479ff;
  color: #fff;
  border-bottom: 1px solid #fff;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 4%;
`;
export const HeadingCustom = styled.h1`
  font-size: 6vw;
  line-height: 100%;
  font-weight: 400;
  padding-bottom: 3%;
  font-family: "Gt super text book", Georgia, sans-serif;
`;
export const Para = styled.p`
  font-weight: 600;
`;
const Bluediv2 = styled.div`
  box-sizing: border-box;
  background-color: #4479ff;
  color: #fff;
  border-bottom: 1px solid #fff;
  height: 60vh;
  display: flex;
`;
const Box = styled.div`
  box-sizing: border-box;
  margin: 2%;
  width: 100%;
`;

const Para2 = styled.p`
  font-weight: 600;
  color: #fff;
  font-size: 18px;
  line-height: 127%;
  text-align: left;
`;
const Cyan = styled(Bluediv)`
  background-color: #bcdfff;
  color: #000;
  flex-direction: column;
  height: 72vh;
  border: 1.5px solid black;
`;
export const HeroBlue = ({ heading, description1, description2 }) => {
  let navigate = useNavigate();
  const getUnlimited = () => {
    navigate("/logIn");
  };
  return (
    <>
      <Bluediv>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <HeadingCustom>{heading}</HeadingCustom>
          <Para>{description1}</Para>
          <Para>{description2}</Para>
          <AccessButton onClick={getUnlimited}>
            Get Unlimited access
          </AccessButton>
        </div>
      </Bluediv>
      <Bluediv2>
        <div
          style={{
            width: "49%",
          }}
        >
          <Box>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                margin: "4%",
                borderRight: "1px solid #fff",
              }}
            >
              <h1
                style={{
                  lineHeight: "100%",
                  letterSpacing: "-0.56px",
                  textAlign: "left",
                  paddingBottom: "3%",
                }}
              >
                {" "}
                Get unlimited access to every <br /> story.
              </h1>
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg"
                alt=""
                style={{
                  marginBottom: "3%",
                }}
              />
              <Para2>
                Read any article in our entire library across all your devices —
                with <br></br> no paywalls, story limits or ads.
              </Para2>
            </div>
          </Box>
        </div>
        <div
          style={{
            width: "49%",
          }}
        >
          <Box>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "3%",
                justifyContent: "space-between",
              }}
            >
              <h1
                style={{
                  lineHeight: "100%",
                  letterSpacing: "-0.56px",
                  textAlign: "left",
                  paddingBottom: "3%",
                }}
              >
                Support the voices you want to hear <br></br>more from.
              </h1>
              <img
                src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg"
                alt=""
                style={{
                  marginBottom: "3%",
                }}
              />
              <Para2>
                Read any article in our entire library across all your devices —
                with <br></br> no paywalls, story limits or ads.
              </Para2>
            </div>
          </Box>
        </div>
      </Bluediv2>

      <Cyan>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <HeadingCustom>
            Take your mind
            <br />
            in new directions.
          </HeadingCustom>
          <CyanAccessButton onClick={getUnlimited}>
            Get unlimited Access
          </CyanAccessButton>
        </div>
        <img
          src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg"
          alt=""
        />
      </Cyan>
      <Footer />
    </>
  );
};
