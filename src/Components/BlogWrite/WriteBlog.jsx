import React from "react";
import { GrAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../Redux/blogre/action";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

const Div = styled.div`
  /* padding:60px 400px 0px 400px; */
  padding-top: 50px;

  width: 65%;
  margin-top: 50px;
  margin: auto;
  position: absolute;
  margin-left: 4vw;
  .writeForm {
    position: relative;
  }

  .writeFormGroup {
    margin-left: 150px;
    display: flex;
    align-items: center;
    /* position: absolute; */
    z-index: -1;
  }

  .writeIcon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgb(121, 118, 118);
    /* color: red;  */
    cursor: pointer;
  }

  .writeInput {
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 30em;
  }

  .writeInput:focus {
    outline: none;
  }
  .writeText {
    font-size: 20px;
  }
  .writeSubmit {
    position: absolute;
    top: 20px;
    right: 50px;
    color: white;
    background-color: teal;
    padding: 10px;

    border: none;
    border-radius: 10%;
    cursor: pointer;
    font-size: 16px;
  }
  /* padding-top:50px; */
`;
export default function WriteBlog() {
  const [blog, setBlog] = React.useState({
    fileUpload: "",
    title: "",
    story: "",
  });

  const dispatch = useDispatch();
  const blog1 = useSelector((store) => store);
  console.log(blog1);
  const navigate = useNavigate();
  const handelBlog = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  // update Redux

  const uptdateRedux = () => {
    fetch(`https://skbhardwaj.herokuapp.com/Blogs`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(getBlog(res));
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://skbhardwaj.herokuapp.com/Blogs`, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        uptdateRedux();
      });
    navigate("/publish");
    // <Navigate to="/publish" />;
    setBlog({
      fileUpload: "",
      title: "",
      story: "",
    });
  };
  const { fileUpload, title, story } = blog;
  return (
    <Div>
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            {/* <i class="fas fa-plus"></i> */}
            <GrAdd className="writeIcon" />
          </label>
          <input
            type="url"
            id="fileInput"
            style={{ display: "none" }}
            name="fileUpload"
            onChange={handelBlog}
            value={fileUpload}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            name="title"
            onChange={handelBlog}
            value={title}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Tell your story"
            className="writeInput writeText"
            autoFocus={true}
            name="story"
            onChange={handelBlog}
            value={story}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </Div>
  );
}
