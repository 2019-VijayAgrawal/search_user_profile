import React from 'react'
import './side.css';

export default function UserData(props) {
    const{email,first_name,last_name,avatar} = props.user;
  return (
    <>
     

    <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column card" id="sidebar">
 
 <ul className="nav flex-column text-white w-100 align-content-center">
  
     <li className="nav-link" >
     <div className='card m-5 ' style={{width:'10rem'}}>
  <img src={avatar} className="card-img" alt="..." style={{border:'10px solid white' }}/>
    </div>
       </li>
   <li className="nav-link">
    
   <span className="mx-2 d-flex align-items-center ">Name : {first_name} {last_name}</span>
   </li>
   <li  className="nav-link">
    
     <span className="mx-2 d-flex align-items-center text-left">Email : {email}</span>
   </li>

 </ul>

 
</div>



    </>
  )
}
