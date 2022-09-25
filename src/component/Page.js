import React,{ useEffect, useState } from 'react';
import './page.css';


const Page = () => {
   // const{email,first_name,last_name,avatar} = props.users;
   const [id, setId] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLaoding] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMessage] = useState("");

  function changehand(e) {
    setId(e.target.value);

  }

  useEffect(() => {
    setLaoding(true);

    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        //console.log(res.json());
        if (res.status >= 400) {
          throw new Error("Server responds with error!")
        }
        res.json()
          .then((result) => {
            setList(result.data)
            setError(false);
            setLaoding(false);
          })


      })
      .catch((err) => {
        console.log(err.message)
        setError(true);
        setLaoding(true);
        setMessage(err.message);

      })

  }, [id])
    return (
        <>
            <div className="main-content">
            {
          error && loading ? <h3 style={{color:'red',marginTop:'5rem'}}>{msg}</h3>

            :

            
        
             <div className='left'>
                <img src={list.avatar} alt='profile_pic'/>
                <hr/>
                <h1>Name :</h1>
                <h1>{list.first_name} {list.last_name}</h1>
                <hr/>
                <h4>Email : {list.email}</h4>
                <hr/>
                <h2>Description :</h2>
                <p>This is the <span style={{color:'red'}}>{list.first_name} {list.last_name}</span> profiles</p>
                <hr/>
             </div>
}
             <div className='right'>
                <h1>Search User Profile</h1>
                <input type='number' 
                value={id} 
                onChange={
                  (e) => setId(e.target.value)
                
                }
                
                />
             </div>
             </div>  
        </>
    )
}

export default Page;