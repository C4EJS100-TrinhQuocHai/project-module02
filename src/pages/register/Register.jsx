import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from "react-router-dom";
import api from "../../service/apis/api.user"
export default function Register() {
  const [user,setUser]=useState({
      userName:"",
      email:"",
      password:"",
      cart:[],
  });
    const redirect= useNavigate();
    const handleChange=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setUser({
        ...user,[name]:value
      })
    }
    
    const handleClick=()=>{
       api.checkRegister(user.email)
       .then((res)=>{
        console.log("44444444",res.data);
          if(res.data.length!=0){
            // đã tồn tại user
            console.log("tài khoản đã tồn tại!");
            return;
          }else{
            api.register(user);
            redirect("/login")
          }
       })

    }
  return (
    <div>
      <label htmlFor="">Usename</label>
      <input
       type="text" 
       onChange={handleChange}
       name="userName"
       />
      <br />
      <label htmlFor="">Email</label>
      <input
       name="email"
       type="text"
       onChange={handleChange}
        />
      <br />
      <label htmlFor="">password</label>
      <input
       name="password"
       type="text" 
       onChange={handleChange}
       />
      <br />
      <button onClick={handleClick}>register</button>
      <p>Bạn đã có tài khoản ?<Link to="/login">Login </Link> </p>
    </div>
  )
}
