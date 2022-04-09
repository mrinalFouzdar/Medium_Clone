import React from "react";
import styled from "styled-components";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { StickyNote2 } from "@mui/icons-material";

const GetAccessbtn = styled.button`
  width: 82%;
  height: 40px;
  background-color: #222;
  color: #fff;
  text-align: center;
  padding-top: 2.5%;
  padding-bottom: 5%;
  border-radius: 20px;
  margin-top: 10%;
  font-weight: 400;
  outline: none;
`;
const Searchbar = styled.input.attrs({ type: "text", placeholder: "Search" })`
  background-color: transparent;
  margin-top: 10%;
  padding: 10px 30px 11px;
  width: 82%;
  border: 1px solid #dcdcdc;
  border-radius: 20px;
`;
const Topicbtn = styled.button`
  width: 100px;
  opacity: 1;
  border-radius: 20px;
  color: black;
  height: 30px;
  margin: 3%;
  border: none;
  cursor: pointer;
`;
const users = [
  {
    img: "https://miro.medium.com/fit/c/112/112/1*v14-816-GS4o5O2JxtdpfA.png",
    name: "Maria Basarab",
    description:
      "I Fled Ukraine to Save My 3-Year-Old Daughter. We want to go home",
    link: "https://medium.com/@mariabasarab",
  },
  {
    img: "https://miro.medium.com/fit/c/112/112/0*XNDd0TUTioO4j6t0",
    name: "Anton Protsiuk",
    description: "Context on Russia`s Massacre of Civilians in Bucha",
    link: "https://medium.com/@antonprotsiuk",
  },
];
const topics = [
  "Technology",
  "Money",
  "Business",
  "Productivity",
  "Psychology",
  "Mindfullness",
  "Art",
];
const SideBar = () => {
  return (
    <div
      style={{
        width: "26.5%",
        borderLeft: "1px solid #dcdcdc",
        display: "flex",
        position: "fixed",
        // zIndex: "2",
        // top: "100",
        right: "0px",
        // left: "120vh",
        margimLeft: "auto",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh;",
        overflowY: "scroll",
        backgroundColor: "white",
      }}
    >
      <GetAccessbtn>Get unlimited access</GetAccessbtn>
      <Searchbar></Searchbar>
      <BsSearch
        style={{
          position: "absolute",
          top: "128px",

          marginLeft: "-280px",
          zIndex: 1000,
        }}
      />
      <div
        style={{
          marginTop: "10px",
        }}
      >
        {users.map((el) => {
          return (
            <a
              href={el.link}
              style={{
                textDecoration: "none",
                color: "#222",
              }}
            >
              <div
                style={{
                  padding: "2%",
                  margin: "3%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "1%",
                  }}
                >
                  <img
                    src={el.img}
                    alt=""
                    width="30px"
                    style={{
                      borderRadius: "50%",
                      padding: "1%",
                    }}
                  />
                  <p
                    style={{
                      marginLeft: "2%",
                      marginTop: "1%",
                      fontSize: "15px",
                    }}
                  >
                    {el.name}
                  </p>
                </div>
                <div>
                  <h5
                    style={{
                      marginLeft: "4%",
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    {el.description}
                  </h5>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div>
        <div
          className="images"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="data:image/png;base64,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"
            alt=""
            width="100px"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
            alt=""
            width="50px"
            height="40px"
            style={{
              marginTop: "10%",
            }}
          />
        </div>
        <div
          className="content-sidebar"
          style={{
            textAlign: "center",
          }}
        >
          <p>
            Discover Medium writers you already <br />
            follow on Twitter.
          </p>
          <button
            style={{
              width: "200px",
              height: "30px",
              background: "transparent",
              border: "1px solid #222",
              borderRadius: "20px",
              marginTop: "5%",
            }}
          >
            Connect to twitter
          </button>
        </div>
        <div
          style={{
            width: "90%",
            background: "#dddd",
            height: "2px",
            marginTop: "20%",
          }}
        ></div>
      </div>
      <div
        style={{
          marginTop: "5%",
        }}
      >
        <h4>Recommended Topics</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
            marginTop: "10%",
          }}
        >
          {topics.map((el) => {
            return <Topicbtn>{el}</Topicbtn>;
          })}
        </div>
        <h4
          style={{
            marginTop: "10%",
            marginBottom: "5%",
          }}
        >
          Reading lists
        </h4>
        <p
          style={{
            marginBottom: "10%",
          }}
        >
          Click the <MdOutlineBookmarkAdd></MdOutlineBookmarkAdd> on any story
          to easily add it to your
          <br /> reading list or a custom list that you can share.
        </p>
      </div>
    </div>
  );
};

export default SideBar;
