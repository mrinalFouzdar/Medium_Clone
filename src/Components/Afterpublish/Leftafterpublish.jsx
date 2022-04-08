import React from "react";
import styled from "styled-components";
import { loadData } from "../../Localstorage";
import SearchIcon from "@mui/icons-material/Search";
import p1 from "../../styles/Image/p1.jpeg";
import p2 from "../../styles/Image/p2.png";
import p3 from "../../styles/Image/p3.jpeg";
import t1 from "../../styles/Image/t1.jpeg";
import t2 from "../../styles/Image/t2.jpeg";
import t3 from "../../styles/Image/t3.jpeg";

const Outisedediv = styled.div`
  width: 30vw;
  margin-left: auto;
  /* background-color: lightblue; */
  min-height: 100vh;
  justify-items: center;
  padding: 40px;
  .otdiv {
    background-color: black;
    border-radius: 50px;
    padding: 5px 20px 10px 20px;
    margin-top: 40px 0px;
    text-align: center;
    color: white;
    height: 40px;
    box-sizing: border-box;
    align-items: center;
  }
  .Osdiv {
    box-sizing: border-box;
    height: 45px;
    border-radius: 50px;
    padding: 10px 10px 10px 20px;
    margin: 40px 0px;
    width: 100%;
    align-items: center;
    border: 1px solid rgb(117 117 117);
    display: flex;
    background-color: white;
  }
  .Osdivi {
    margin-left: 20px;
    width: 100%;
    height: 43px;
    border: none;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  .Osdivi:focus {
    outline: none;
  }
  .imgl {
    border-radius: 50%;
    min-width: 85px;
  }
  .imgl > img {
    border-radius: 50%;
  }
  .Osdiv1 {
    font-size: 16px;
    font-weight: 600;
    margin-top: 40px;
  }
  .osdiv2 {
    display: flex;
    margin-top: 40px;
  }
  .osdiv21 {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
  }
  .osdiv211 {
    display: flex;
  }

  .osdimg > img {
    width: 30px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .dlp {
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    bottom: 20px !important;
  }
  .dlp > p {
    margin-right: 15px;
    font-size: 14px;
  }
  .osdiv22 {
    margin-left: auto;
  }
  .osdiv22 > img {
    width: 70px;
    margin-left: auto;
  }
  .imglpp {
    color: rgb(26 137 23);
    fill: rgb(26 137 23);
  }
`;

export const Leftafterpublish = () => {
  let userDetails = loadData("userDetails");
  return (
    <Outisedediv>
      <div className="otdiv">Upgrade</div>
      <div className="Osdiv">
        <SearchIcon /> <input type="text" className="Osdivi" />
      </div>

      <div className="imgl">
        <img src={userDetails[0].imageUrl} alt="" />
        <h4>{userDetails[0].name}</h4>
      </div>
      <p className="imglpp">Edit profile</p>
      <div className="Osdiv1">More from Medium</div>
      <div className="osdiv2">
        <div className="osdiv21">
          <div className="osdiv211">
            <div className="osdimg">
              {" "}
              <img src={t1} alt="" />
            </div>
            <div>Tim wise</div>
          </div>
          <div>
            <h4>
              What language is this? This looks like JS/TS, in which case
              backticks are basically strings, IntelliSense does not execute
              inside strings afaik.
            </h4>
          </div>
        </div>
        <div className="osdiv22">
          <img src={p1} alt="hallo" />
        </div>
      </div>
      <div className="osdiv2">
        <div className="osdiv21">
          <div className="osdiv211">
            <div className="osdimg">
              {" "}
              <img src={t2} alt="" />
            </div>
            <div>Sanjiva Weerawarana</div>
          </div>
          <div>
            <h4>
              Next steps for Sri Lanka — What is the change we want (and can
              have)?
            </h4>
          </div>
        </div>
        <div className="osdiv22">
          <img src={p2} alt="hallo" />
        </div>
      </div>
      {/* ****************************************** */}
      <div className="osdiv2">
        <div className="osdiv21">
          <div className="osdiv211">
            <div className="osdimg">
              {" "}
              <img src={t3} alt="" />
            </div>
            <div></div>
          </div>
          <div>
            <h4>Why I left Google</h4>
          </div>
        </div>
        <div className="osdiv22">
          <img src={p3} alt="hallo" />
        </div>
      </div>
      {/* ************************************************ */}

      <div className="dlp">
        <p>Help</p>
        <p>Status</p>
        <p>Writers</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Privicy</p>
        <p>Terms</p>
        <p>About</p>
        <p>Knowble</p>
      </div>
    </Outisedediv>
  );
};
