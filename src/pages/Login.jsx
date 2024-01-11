import React ,{useState}from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components";
import { useEffect } from "react";
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user,setUser]=useState({
    email:'',
    password:''
  })

  const [message, setMessage] = useState({
    message: '', 
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!user.email || !user.password || !user.firstName) {
   alert("Enter The Details ");
    return;
     }
    const data = {
      email: user.email,
      password: user.password,
    };
    try {
      const response = await fetch('https://finale-p2jq.onrender.com/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      setMessage({
        message: result.message,
       
      });
  
      console.log(result.message);
  
      if (result.success) {
        
        navigate('/home');
      }
      setUser({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
  
     
    }
  }
  

  useEffect (()=>
  {
  console.log(user.email);
  console.log(user.password);
  },[user])
  return (
    <>
 
      <div style={{height:'inherit',width:'100%',backgroundColor:'lightGrey'}}>
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
                <p>Forgot Password? <Link to="/forgot" className="text-decoration-underline text-info">Reset</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <h3> {message.message}</h3>
      </div>
      <Footer />
    </>
  );
};

export default Login;
