import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from '../../Redux/blogre/action'
import styled from 'styled-components'
import {AiFillDelete} from "react-icons/ai"
const Div=styled.div`
margin-right:0px;
/* width: 1120px; */
box-sizing:border-box ;
 .logoDiv{
   display:flex ;
   margin-left:500px;
 }
 h3{
  color: rgba(41, 41, 41, 1);
 margin-bottom:10px ;
 }
 .borderDiv{
   margin-top:20px;
   border-bottom:1px solid rgba(117, 117, 117, 1);
 }
 .oneMore{
   color:rgba(117, 117, 117, 1) ;
   margin-bottom:10px ;
 }

 .svgclass{
   position: relative;
 }




.delete{
  color:  rgba(41, 41, 41, 1);
  position:absolute ;
  top:2px ;
}
.delete:hover{
  color:red ;
}


`
export default function Published() {
  const [storeData,setStore]=React.useState([])
  const dispatch = useDispatch()
  const blogData=useSelector((store)=>store.bologData)
  // console.log(blogData);
  const getJsonData=()=>{
      fetch(`https://skbhardwaj.herokuapp.com/Blogs`)
      .then((res)=>res.json())
      .then((res)=>{
          // console.log(res)
          dispatch(getBlog(res))
          setStore(res)
          // console.log(blogData);
          
      })
  }
  const handleDelte=(id)=>{
    fetch(`https://skbhardwaj.herokuapp.com/Blogs/${id}`,{
      method:"DELETE"
    }).then((res)=>res.json())
    .then((res)=>getJsonData())
    .catch((err)=>console.log(err))
}
 

  React.useEffect(()=>{
      getJsonData()
  },[])

  return (
    <Div>
        
                {
                   storeData.map((item)=> <div key={item.id} className="borderDiv">
                       <h3>{item.title}</h3>
                       {/* <button onClick={()=>handleDelte(item.id)}>Delete</button> */}
                       <h3 className='oneMore'>{item.title}</h3>
                       <div className='logoDiv'>
                         <div>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z" fill="#000"></path></svg>
                         </div>
                         <div className='svgclass'>
                       
                         <AiFillDelete  className='delete' onClick={()=>handleDelte(item.id)}/>
                         </div>
                       </div>
                        {/* <hr/> */}
                   </div>) 
                }
           
    </Div>
  )
}
