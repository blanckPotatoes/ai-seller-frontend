import axios from "axios"

// register
const userURL = "http://localhost:5050/api/v1/users/"
const registerURL = userURL+"register";
export const registerAPI = async(userData)=>{
    const response = await axios.post(registerURL,{
        email:userData.email,
        password:userData.password,
        username:userData.username,
    },{
        withCredentials:true,
    });
    return response?.data;
}

// login
const loginURL = userURL+"login"
export const loginAPI = async(userData)=>{
    const response = await axios.post(loginURL,{
        email:userData.email,
        password:userData.password,
    },{
        withCredentials:true,
    });
    return response?.data;
}

// check auth
const authStatusURL = userURL+"auth/check"
export const checkUserAuthStatusAPI = async () =>{
    const response = await axios.get(authStatusURL,
        {
        withCredentials:true,
    });
    return response?.data;
}

// logout
const logoutURL = userURL+"logout"
export const logoutAPI = async()=>{
    const response = await axios.post(logoutURL,{},{
        withCredentials:true,
    });
    return response?.data;
}

// user profile
const userProfileURL = userURL+"profile"
export const getUserProfileAPI = async () =>{
    const response = await axios.get(userProfileURL,
    {
        withCredentials:true,
    });
    console.log(response)
    return response?.data;
}