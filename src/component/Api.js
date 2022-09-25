import React, { useEffect, useState } from 'react';
import UserData from './UserData';
import './api.css';

const Api = () => {
  const [id, setId] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLaoding] = useState(false);
  const [click, setClick] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMessage] = useState("");

  function changehand(e) {
    setId(e.target.value);

  }

  useEffect(() => {
    setLaoding(true);
    setClick(true)

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
    <div className='cont'>
      <div className='left-section'>
        {
          error && loading ? <h3 style={{color:'red',marginTop:'5rem'}}>{msg}</h3>

            :

             <UserData user={list} />
        }
      </div>
      <div className='right-section'>
        <div className="rt-one">
          <h3 >Search User Profile </h3>
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
       

      </div>


      <br />
      <br />



      {/* <div className='main'>

      <div className='left'>


      </div>
      <div className='right'>
        {click ?

          <div className='container mt-5'>
            <div className="card mx-auto p-4 " style={{ width: '250px' }}>
              <img className="card-img-top rounded-circle" src={list.avatar} alt="" />
              <div className="card-body">
                <h2 className="card-title">{list.first_name} {list.last_name}</h2>
                <p className="card-text">{list.email}</p>
              </div>
            </div>
          </div>
          :

          <div>
            <p>Searching</p>
          </div>
        }
      </div>
    </div> */}

    </div>
  )
}

export default Api;