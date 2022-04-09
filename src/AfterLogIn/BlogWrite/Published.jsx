import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../Redux/blogre/action";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import DeleteIcon from "@mui/icons-material/Delete";
import { Loading2 } from "../../Components/Loading2";
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

  .svgclass1 {
    /* position: absolute; */
    bottom: 0;
    margin-left: 40px;
    margin-top: 40px;
  }
  .svgclass1 {
    position: absolute;
    bottom: 0;
    margin-left: 40px;
    margin-top: 400px;
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
    padding-top: 80px;
  }
  .delete {
    width: 40px !important;
    color: red;
    position: relative;
    margin-top: -200x;
    margin-left: 150px;
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
  .svgh {
    display: flex;
    margin-left: 40px;
    /* border: 1px solid red; */
    justify-items: center;

    align-items: center;
    width: 400px !important;
  }
`;
const Di = styled.div`
  position: absolute;
  margin-right: 400px !important;
  margin-left: -25vw;
  /* margin: auto; */
`;

export default function Published() {
  const [storeData, setStore] = React.useState([]);
  const dispatch = useDispatch();
  const blogData = useSelector((store) => store.bologData);
  const [display, setDisplay] = React.useState(true);

  const [isloading, setIsloading] = React.useState(true);
  // console.log(blogData);
  const getJsonData = () => {
    fetch(`https://skbhardwaj.herokuapp.com/Blogs`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        dispatch(getBlog(res));
        setStore(res);
        // console.log(blogData);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
  };
  // const handleDelte = (id) => {
  //   console.log("mrinal", id);
  //   fetch(`https://skbhardwaj.herokuapp.com/Blogs/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => getJsonData());

  // };
  const handleDelte = (id) => {
    setIsloading(true);
    fetch(`https://skbhardwaj.herokuapp.com/Blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => getJsonData())
      .catch((err) => console.log(err))
      .finally((err) => setIsloading(false));
  };
  React.useEffect(() => {
    getJsonData();
  }, []);

  return isloading ? (
    <Di>
      <Loading2 />
    </Di>
  ) : (
    <Div display={display}>
      {storeData.map((item) => (
        <div key={item.id} className="borderDiv">
          <h3>{item.title}</h3>
          {/* <button onClick={()=>handleDelte(item.id)}>Delete</button> */}
          <h3 className="oneMore">{item.story}</h3>
          <div className="logoDiv">
            <div className="svgh">
              {/* <div className="svgclass1"> */}
              <DeleteIcon
                className="delete"
                fontSize="large"
                onClick={() => handleDelte(item.id)}
              />
              {/* </li>
              </ul> */}
              {/* </div> */}
            </div>
          </div>
          {/* <hr/> */}
        </div>
      ))}
    </Div>
  );
}
