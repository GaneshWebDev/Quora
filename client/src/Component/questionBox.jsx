import { useState } from 'react';
import './questionBox.css'
function QuestionBox({fun}){
    const [createPost,setCreatePost]=useState(false);
    return(
        <div className="questionBox">
           <div className="header">
                <i class="fa-solid fa-xmark icon" onClick={()=>fun(false,'add')}></i>
                <span className={!createPost?'title active':'title'} onClick={()=>setCreatePost(false)}>Add Question</span>
                <span className={createPost?'title active':'title'} onClick={()=>setCreatePost(true)}>Create Post</span>
           </div>
           {createPost?<><div className='questionTitle'>
                <input type="text" placeholder='Say something...' />
           </div>
           <div className='questionText'>  
           </div></>:<><div className='questionTitle'>
                <input type="text" placeholder='Start your question with "What","How","Why",etc.' />
           </div>
           <div className='questionText'>  
           </div>
           </>}
           {createPost?<div className='buttons'>
              <button className='addQuestion'>Post</button>
           </div>:<div className='buttons'>
              <button className='cancel'>Cancel</button>
              <button className='addQuestion'>Add question</button>
           </div>}
        </div>
    )
}
export default QuestionBox;