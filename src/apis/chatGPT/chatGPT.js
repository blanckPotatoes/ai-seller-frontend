import axios from "axios"

// register
export const userGenerateContentAPI = async(userPrompt)=>{
    const response = await axios.post(
        "http://localhost:5050/api/v1/openai/generate",
        {
        prompt:userPrompt,
    },{
        withCredentials:true,
    });
    // console.log(response?.data)
    return response?.data;
}
