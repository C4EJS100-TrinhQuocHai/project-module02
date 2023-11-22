import React, { useState } from 'react'
import apiUser from '../../service/apis/api.user';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const redirect=useNavigate();
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({
      ...user,[name]:value,
    })
  }
  const handleClick=()=>{
      apiUser.checkLogin(user.email,user.password)
      .then((response)=>{
          if(response.data.length!=0){
            console.log("đăng nhập thành công");
            redirect("/")
          }else{
            console.log("tài khoản không đúng");
          }
      })
      .catch(error=>console.log(error))
  }
  return (
    <>
      <div>
        <label htmlFor="">Email</label>
        <input
         type="text"
         onChange={handleChange}
         name="email"
          /><br />
        <label htmlFor="">Password</label>
        <input
        name="password"
         type="text"
         onChange={handleChange}
          /><br />
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  )
}
