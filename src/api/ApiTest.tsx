
import getAxiosInstance from "./api";

const ApiTest = (callback:CallableFunction) => {
  return  getAxiosInstance().get("/posts").then(r=>{
    const d = r.data;
    callback(true,d);
}).catch(e=>{
    callback(false,e);
});
}

export default ApiTest
