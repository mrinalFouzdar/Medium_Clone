import React from 'react'
import { GrAdd } from "react-icons/gr"
import styled from 'styled-components'

const Div= styled.div`
    /* padding:60px 400px 0px 400px; */
    padding-top:50px;
    .writeForm{
        position:relative ;
    }

    .writeFormGroup{
        margin-left:150px ;
    }
    
    /* padding-top:50px; */
`
export default function WriteBlog() {
  return (
    <Div>
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                {/* <i class="fas fa-plus"></i> */}
                <GrAdd/>
                
                </label>
                <input type="file"  id="fileInput"  style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div>
                <input type="text" placeholder='Tell your story' className='writeInput writeText' autoFocus={true} />
            </div>
            <button className='writeSubmit' type='submit'>Publish</button>
        </form>

    </Div>
  )
}
