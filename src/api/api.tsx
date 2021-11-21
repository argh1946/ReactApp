import Axios from 'axios'

 const getAxiosInstance = ()=>{
return Axios.create({
    baseURL:"http://localhost:3000",
    headers:{
       
        API_KEY:"alireza"
       
    }
});
}

export default getAxiosInstance