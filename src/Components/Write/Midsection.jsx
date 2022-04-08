import React from "react";
import "./Midsection.Module.css";
import { Acordian } from "./Acordian";
import {
  AccessButton,
  Bluediv,
  HeadingCustom,
  Para,
} from "../Membership/Hero-blue";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
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
  const [active, setActive] = React.useState("");
  const nevigate = useNavigate()
    const handleRedirectSingIn=()=>{
      nevigate("/logIn")
    }

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
            <AccessButton onClick={handleRedirectSingIn}>Start writing</AccessButton>
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
      <div className="acord">
        <h1 className="aud-head acord-head">More about writing on Medium:</h1>
        <Acordian
          ans="First, make a free account. Then, to create a story, click on your profile picture in the top-right corner of the page, then “Write a Story.”"
          title={"How do I start writing on Medium?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="Anyone can write on Medium. Whether you’ve never written before or are ready to create a full publication, it’s easy to get started and we allow you to focus more on big ideas and less on driving clicks. With the option to earn for your work, you can also be directly rewarded for the value you provide readers."
          title={"Who writes on Medium?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="If you join the Medium Partner Program, you can earn money based on how much time members spend reading your work and whenever you convert non-paying readers into members."
          title={"How can I make money writing on Medium?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="No. You can write on Medium even if you are not in the Partner Program. If you are in the Partner Program you can also choose which of the stories you publish are eligible for the Program. For more about the Partner Program, click here."
          title={"Do I need to be in the Partner Program to write on Medium?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="Anyone on the internet can read your stories. Even if your story is being distributed in the Partner Program as a part of our metered paywall, anyone can still read a limited number of articles for free each month. If you want to share an un-metered version of your story, you can use a Friend Link."
          title={"Who can read the work I publish on Medium?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="For the latest guides, resources, and inspiration for creators on Medium, follow Creators Hub, the official Medium blog for writers."
          title={"Where can I get updates and plug into the creator community?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="Medium has a number of tools to connect you with over 100 million readers on the platform and beyond. Some ways you can build your audience are by starting a newsletter,  submitting to publications, following the distribution standards, and sharing your stories on social media. We also encourage you to check out our blog, 3 Minute Read, for more helpful tips and tricks – like how to write a great headline and SEO tips to make your stories more discoverable."
          title={"How can I grow my audience with Medium?"}
          active={active}
          setActive={setActive}
        />
        <div className="bottom-div">
          <h3 className="acord-bottom">Looking for help getting started?</h3>
          <AccessButton className="bot-btn">Check out our guide</AccessButton>
        </div>
      </div>
    </div>
  );
};
