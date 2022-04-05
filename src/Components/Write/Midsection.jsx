import React from "react";
import "./Midsection.Module.css";
import {
  AccessButton,
  Bluediv,
  HeadingCustom,
  Para,
} from "../Membership/Hero-blue";
import styled from "styled-components";
const Blackdiv = styled(Bluediv)`
  background: black;
  display: flex;
  flex-direction: column;
  height: 40vh;
`;
const Pinkdiv = styled(Bluediv)`
  background: #ffd1b9;
  display: flex;
  height: fit-content;
  flex-direction: column;
  color: black;
  align-items: flex-start;
  padding-left: 5%;
`;
const Whitediv = styled(Blackdiv)`
  background: white;
  color: #222;
  text-align: center;
  height: 50vh;
  border-bottom: 1px solid #222;
`;
const Green = styled(Bluediv)`
  background: #34a245;
  background-image: url(https://cdn-static-1.medium.com/sites/medium.com/creators/images/cubes.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3%;
  height: 70vh;
`;
const Learnbtn = styled(AccessButton)`
  background-color: black;
  color: #fff;
`;
export const Midsection = () => {
  return (
    <div>
      <Blackdiv>
        <HeadingCustom>Create your space.</HeadingCustom>
        <Para>
          Tell your story your way — with different ways to write, style, and
          brand your work.
        </Para>
      </Blackdiv>
      <div className="pink-box">
        <div className="left-pink-box">
          <Pinkdiv>
            <HeadingCustom>Create your space.</HeadingCustom>
            <Para className="Para-m">
              Tell your story your way — with different ways to <br />
              write, style, and brand your work.
            </Para>
            <AccessButton>Start writing</AccessButton>
          </Pinkdiv>
        </div>
        <div className="right-pink-box">
          <img
            src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png"
            alt=""
            className="img-pink"
          />
        </div>
      </div>
      <div className="pink-box">
        <div className="left-pink-box">
          <Pinkdiv className="pink-border">
            <HeadingCustom className="blog-head">Start a blog.</HeadingCustom>
            <Para>
              Create a blog for free to have a personalized home for your <br />{" "}
              writing. Brand your space and share your writing with <br />
              readers on any device.
            </Para>
          </Pinkdiv>
        </div>
        <div className="right-pink-box">
          <Pinkdiv>
            <HeadingCustom className="blog-head">
              Start a publication.
            </HeadingCustom>
            <Para>
              Collaborate with others or publish under a brand name.
              <br /> Use our story submission system and expressive <br />
              customization options.
            </Para>
          </Pinkdiv>
        </div>
      </div>
      <Whitediv>
        <HeadingCustom>
          Find and grow your <br /> audience.
        </HeadingCustom>
        <Para>
          With simple tools and features, you have the chance to connect with
          over 100 million curious readers.
        </Para>
      </Whitediv>
      <div className="audience">
        <div className="left-aud">
          <h2 className="aud-head">Audience insights.</h2>
          <Para>
            Use data to learn what resonates with your <br />
            readers so you can keep growing your audience.
          </Para>
          <img
            src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/creator-find-points-iphones.png"
            alt=""
            className="iphone-img"
          />
        </div>
        <div className="right-aud">
          <div className="right-top">
            <div className="right-top-l">
              <h2 className="aud-head">Social connectivity.</h2>
              <Para>
                Find people you're already connected with on Twitter and easily
                share your stories across platforms.
              </Para>
            </div>
            <div className="right-top-r">
              <h2 className="aud-head">Powerful network.</h2>
              <Para>
                Readers can discover and follow you easily with tailored feeds
                and recommendations.
              </Para>
            </div>
          </div>
          <div className="right-bottom">
            <div className="right-b-1 b-r">
              <h2 className="aud-head">Powerful network.</h2>
              <Para>
                Readers can discover and follow you easily with tailored feeds
                and recommendations.
              </Para>
            </div>
            <div className="right-b-1 b-r">
              <h2 className="aud-head">Interactive discussions.</h2>
              <Para>
                Build relationships with your readers through a threaded
                comments section.
              </Para>
            </div>
            <div className="right-b-1">
              <h2 className="aud-head">Powerful network.</h2>
              <Para>
                Readers can discover and follow you easily with tailored feeds
                and recommendations.
              </Para>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Green>
          <HeadingCustom>
            Earn money from <br />
            your writing.
          </HeadingCustom>
          <Para>
            Writing has its rewards when you join the <br />
            Partner Program. Learn how to get paid for the <br /> content you
            publish and the audiences you <br />
            build.
          </Para>
          <Learnbtn>Learn more</Learnbtn>
        </Green>
      </div>
    </div>
  );
};
