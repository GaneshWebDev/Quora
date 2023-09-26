import './notification.css'
import { useState } from 'react';
import Navbar from './Navbar';
import QuestionBox from './questionBox';
function Notification(){
    const filter=['Stories','Questions','Spaces','People updates','Upvotes'];
    const [addQuestion,setAddQuestion]=useState(false);
    const openDIv=(dis,div)=>{
      if(div=='add'){
        setAddQuestion(dis)
        console.log(dis)
      }
      
    }
    function stringFun(string,n){
        return string.length>n?<span>{string.substr(0,n-1)+'...'}</span>:<span>{string}</span>
    }
    const noftifications=[{
        img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRgIAHrdVHSjBjzOKJvrt1GoO0jkgwqhkiqqgU9VyHXrgCj39A",
        accName:"Better Life_1",
        space:"Posted in a Space you migth like",
        time:"18h ago",
        question:"5 Habits rich people wont tell you:"
    },{
        img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlNCeC1AeRj3gqJovraIDm1XF5iWStx2r5hkkxm5jIv8wLSgDK",
        accName:"Financial Updates",
        space:"Posted in a Space you migth like",
        time:"August 28",
        question:"I am a 35-year-old Indian. I have saved 50 lacs rupees after working for 12 years. How much do other average Indians that are my age have saved?",
    },{
        img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRgIAHrdVHSjBjzOKJvrt1GoO0jkgwqhkiqqgU9VyHXrgCj39A",
        accName:"Better Life_1",
        space:"Posted in a Space you migth like",
        time:"18h ago",
        question:"5 Habits rich people wont tell you:"
    }
    ]
    return(
        <>
        <Navbar fun={openDIv}/>
        {!addQuestion&&<div className='notfiy'>
            <div className='filter'>
                <span  className='title'>Filter</span>
                <span className='title2 fil'>All Notifications</span>
                {filter.map(filt=>{return(<span className='fil'>{filt}</span>)})}
            </div>
            <div className='Notification'>
               <span className='title'>Notifications</span>
               
                {noftifications.map(not=>{return(
               <div className='d1'>
                <div className='d11'>
               <img src={not.img}/>
               <div className='d12'>
                   <div className='d121'>
                    <span>{not.accName}</span>
                    <span>{not.space}</span>
                    <span>{not.time}</span>
                    </div>
                    <span>{stringFun(not.question,50)}</span>
               </div>
               </div>
               <i class="fa-solid fa-ellipsis icon"></i>
               </div>
               )})}
              
            </div>
        </div>}
        {addQuestion&&<QuestionBox fun={openDIv}/>}
        </>
    )
}
export default Notification;