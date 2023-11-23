import React, { useEffect, useState } from 'react'
import crypto from "crypto-js";
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
            console.log("22222",user);
            var token = crypto.AES.encrypt(user.password,import.meta.env.VITE_TOKEN_USER).toString();
            console.log("11111",token);
            let user1={...user,password:token}
            api.register(user1);
            redirect("/login")
          }
       })

    }
    // để mã hoá dữ liệU tạo thành 1 mã riêng 
 ///"abcxyz"
// Xem chuỗi đã mã hóa

 
// Lấy danh sách byte đã mã hóa
// var bytes = crypto.AES.decrypt(token, 'quochai12');
 
// // Chuyển sang chuỗi gốc
// var message_decode = bytes.toString(crypto.enc.Utf8);
 
// console.log("22222",message_decode);

  return (
    <div>
      <label htmlFor="">Username</label>
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
