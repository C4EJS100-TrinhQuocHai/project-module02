import React, { useState } from 'react'
import apiUser from '../../service/apis/api.user';
import { useNavigate } from 'react-router-dom';
import crypto from 'crypto-js';
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
      apiUser.checkLogin(user.email)
      .then((response)=>{
          if(response.data.length!=0){
            console.log("đúng email",response.data[0].password);
            // Lấy danh sách byte đã mã hóa
         var bytes = crypto.AES.decrypt(response.data[0].password,import.meta.env.VITE_TOKEN_USER);
 
      // Chuyển sang chuỗi gốc
        var token = bytes.toString(crypto.enc.Utf8);
        // có mã rồi đi so sánh với giá trị ô input người dùng nhập vào
          if(token==user.password){
            console.log("đăng nhập thành công!");
            redirect("/");
          }else{
            console.log("sai mật khẩu");
          }
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
