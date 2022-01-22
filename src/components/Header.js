import React, { useState, useEffect } from 'react';
import './Header.css';
import axios from 'axios';
const Header = () => {
  // let arr = [];
  const [userList, setUserList] = useState([])


  useEffect(() => {
    let apiCall = async () => {
      let result = await axios.get("http://localhost:4000/users");
      setUserList(result.data)

    }

    apiCall()
  }, [])

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setUserRegistration({ ...userRegistration, [name]: value });

  }
  // const [record, setRecord] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //validation call
    // console.log("userInfo",userRegistration)
    
    
    axios({
      method: "POST",
      url: "http://localhost:4000/users",
      data: userRegistration,
    }).then((res)=>{
      console.log("res",res)
    }).catch((err)=>{
      console.log("error",err.response.data)
    })
    
    //then API call

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="registration_form">
          <div className="form_header">
            <h3>Registration Form:</h3>
          </div>

          <div className="form_name">
            <h5>Full Name:</h5>
            <input type="text"
              autoComplete='off'
              placeholder='Enter Your Name'
              name='username'
              value={userRegistration.username}
              onChange={handleInput}
              id='a' />
          </div>

          <div className="email">
            <h5>Email:</h5>
            <input type="text"
              autoComplete='off'
              placeholder='Enter Your Email'
              name='email'
              value={userRegistration.email}
              onChange={handleInput} />
          </div>

          <div className="mobile_number">
            <h5>Mobile Number:</h5>
            <input type="text"
              autoComplete='off'
              placeholder='Mobile Number'
              name='phone'
              value={userRegistration.phone}
              onChange={handleInput} />
          </div>

          <div className="password">
            <h5>Password:</h5>
            <input type="password"
              autoComplete='off'
              placeholder='Password'
              name='password'
              value={userRegistration.password}
              onChange={handleInput} />
          </div>

          <div className="button">
            <button type='submit' onClick={handleSubmit} >Registration</button>
          </div>
        </div>
        <div className="right_container">
          {
            userList.map((data) => {
              const {User_Contact,User_Email,User_Name} = data;
              // console.log("data",data)
              return (
                <div className="card" >
                  <div className="data">
                    <div className="id_data">
                      <h3 id='h3'>User_ID:</h3> <h5 id='h02'>443</h5>
                    </div>
                    <div className="name_data">
                      <h3 id='h3'>User_Name:</h3> <h5 id='h01'>{data.User_Name}</h5>
                    </div>
                    <div className="email_data">
                      <h3 id='h3'>User_Email:</h3> <h5 id='h03'>{User_Email}</h5>
                    </div>
                    <div className="mob_data">
                      <h3 id='h3'>User_Contact:</h3> <h5 id='h5'>{User_Contact}</h5>
                    </div>
                  </div>
                  <div className="add_delete_btn">
                    <button className='edit_button'>Edit:</button>
                    <button className='update_button'>Update:</button>
                  </div>
                </div>
              )
            })
          }


        </div>
      </header>
    </div>
  );
}
export default Header;