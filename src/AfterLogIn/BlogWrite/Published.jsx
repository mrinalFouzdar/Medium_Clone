import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../Redux/blogre/action";
import styled from "styled-components";
const Div = styled.div`
  margin-right: 0px;
  width: 48.5vw;
  /* width: 1120px; */
  box-sizing: border-box;
  .logoDiv {
    display: flex;
    margin-left: 500px;
  }
  h3 {
    color: rgba(41, 41, 41, 1);
    margin-bottom: 10px;
  }
  .borderDiv {
    margin-top: 20px;
    border-bottom: 1px solid rgba(117, 117, 117, 1);
  }
  .oneMore {
    color: rgba(117, 117, 117, 1);
    margin-bottom: 10px;
  }

  .svgclass {
    position: relative;
  }

  .main3 {
    /* border:1px solid black ; */
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    position: absolute;
    top: 25px;
    left: -40px;
    padding: 8px 2px 8px 2px;
    background: rgb(255, 255, 255);
    border-radius: 3px;
    /* box-shadow: 5px 10px; */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: ${(props) => (props.display === false ? "block" : "none")};
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    align-items: stretch;
  }

  li {
    width: 100px;
    padding-bottom: 10px;
  }

  .edit {
    padding-top: 8px;
  }
  .delete {
    color: red;
  }
  .delete:hover {
    color: black;
  }
  .view {
    color: rgba(117, 117, 117, 1);
  }
  .view:hover {
    color: black;
  }
`;
export default function Published() {
  const [storeData, setStore] = React.useState([]);
  const dispatch = useDispatch();
  const blogData = useSelector((store) => store.bologData);
  const [display, setDisplay] = React.useState(true);
  // console.log(blogData);
  const getJsonData = () => {
    fetch(`https://skbhardwaj.herokuapp.com/Blogs`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        dispatch(getBlog(res));
        setStore(res);
        // console.log(blogData);
      });
  };
  const handleDelte = (id) => {
    fetch(`https://skbhardwaj.herokuapp.com/Blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => getJsonData());
  };
  const handleDisplay = (id) => {
    if (id) {
      setDisplay(!display);
    }
  };

  React.useEffect(() => {
    getJsonData();
  }, []);

  return (
    <Div display={display}>
      {storeData.map((item) => (
        <div key={item.id} className="borderDiv">
          <h3>{item.title}</h3>
          {/* <button onClick={()=>handleDelte(item.id)}>Delete</button> */}
          <h3 className="oneMore">{item.title}</h3>
          <div className="logoDiv">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
                  fill="#000"
                ></path>
              </svg>
            </div>
            <div className="svgclass">
              <svg
                class="ki"
                width="25"
                height="25"
                onClick={() => handleDisplay(item.id)}
              >
                <path
                  d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <ul className="main3">
                <li className="edit view">Edit story</li>
                <li className="view">View status</li>
                <li className="delete" onClick={() => handleDelte(item.id)}>
                  Delete story
                </li>
              </ul>
            </div>
          </div>
          {/* <hr/> */}
        </div>
      ))}
    </Div>
  );
}
