import React from "react";
import styled from "styled-components";

const Div = styled.div`
   margin-top: 50px;
   
   .mainDiv{
    background-color:  rgb(250, 250, 250);
    display: flex ;
    max-width: 740px;
    border: 1px solid rgba(230, 230, 230, 1);
    justify-content: space-between;
    cursor: pointer;
    
   }

   .readList{
     padding:20px ;
   
   }
   .viewList{

     display:flex ;
   }
`


const Saved = () => {
  return <Div>

    <div className="mainDiv">
      <div className="readList">
        <div>
          <h2>Reading list</h2>
        </div>
        <div className="viewList">
          <div>
            <p>View list</p>
          </div>
          <div>
            <span>3 stories <svg width="8" height="11" viewBox="0 0 8 11" fill="none" class="lx no"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.18 2.6a1.82 1.82 0 0 1 3.64 0v2.07H2.18V2.6zm4.37 2.07V2.6C6.55 1.17 5.4 0 4 0a2.58 2.58 0 0 0-2.55 2.6v2.07c-.39 0-.75.17-1.03.46-.27.3-.42.7-.42 1.12v3.17a1.7 1.7 0 0 0 .42 1.12c.14.14.3.26.47.34.18.08.37.12.56.12h5.1c.39 0 .75-.17 1.03-.47.27-.3.42-.7.42-1.11V6.25a1.7 1.7 0 0 0-.42-1.12c-.14-.14-.3-.26-.47-.34a1.35 1.35 0 0 0-.56-.12z" fill="#757575"></path></svg></span>
          </div>
        </div>
      </div>
      <div>
        <img src="https://miro.medium.com/fit/c/208/208/1*XXbcbVCijb2DqX6SFHOlEA.png" alt="" />
      </div>
    </div>
  </Div>;
};

export default Saved;
