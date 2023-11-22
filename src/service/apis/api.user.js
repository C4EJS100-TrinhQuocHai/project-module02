import axios from "axios"
export default {
    //  hàm register để đăng kí 
    register:async (dataRegister)=>{
        // console.log("55555",dataRegister);
        return await axios.post(import.meta.env.VITE_HOST_NAME+"users",dataRegister)
    },
    // kiểm tra xem tài khoản đã được đăng kí hay chưa (email)
    checkRegister:async(email)=>{
        return await axios.get(`${import.meta.env.VITE_HOST_NAME}users?email=${email}`)
    },
    checkLogin:async(email,password)=>{
        return await axios.get(`${import.meta.env.VITE_HOST_NAME}users?email=${email}&password=${password}`)
    }
}