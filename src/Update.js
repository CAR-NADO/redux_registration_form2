import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './components/Header.css';
import { Link, useParams, useNavigate} from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log("param", id);
    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        number: "",
        password: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        setUserRegistration({ ...userRegistration, [name]: value });
    }
    useEffect(() => {
        let apiCall = async () => {
          let result = await axios.get(`http://localhost:8000/users/${id}`);
        //   console.log("result",result);
          setUserRegistration(result.data)
        }
        apiCall()
      }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let result = await axios({
                method: "put",
                url: `http://localhost:8000/users/${id}`,
                data: userRegistration
            })
            // console.log("update API result response", result)
            navigate("/")
        }
        catch (error) {
            console.log("Something is Wrong");
        }
    }
    return <div>
        <div className="registration_form">
            <div className="form_header">
                <h3>Registration Form:</h3>
                <Link to="/"><span>Back</span></Link>
            </div>
            <div className="form_name">
                <h5>Full Name:</h5>
                <input type="text"
                    autoComplete='off'
                    placeholder='Enter Your Name'
                    name='username'
                    required
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
                    required
                    value={userRegistration.email}
                    onChange={handleInput} />
            </div>

            <div className="mobile_number">
                <h5>Mobile Number:</h5>
                <input type="text"
                    autoComplete='off'
                    placeholder='Mobile Number'
                    name='number'
                    required
                    value={userRegistration.number}
                    onChange={handleInput} />
            </div>

            <div className="password">
                <h5>Password:</h5>
                <input type="password"
                    autoComplete='off'
                    placeholder='Password'
                    name='password'
                    required
                    value={userRegistration.password}
                    onChange={handleInput} />
            </div>

            <div className="button">
                <button type='submit' onClick={handleSubmit} >Update:</button>
            </div>
        </div>
    </div>;
};

export default Update;
