import Axios from 'axios'

const getAxiosInstance = () => {
    return Axios.create({
        baseURL: "http://localhost:33502",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJleHAiOjE2Mzk1NjA3NzgsImlzcyI6IndlYmFwaS5jbiIsImF1ZCI6IldlYkFwaSJ9.Zjhp-CRIhwKgopWQNN0U4EFFCEuCyLSWP-ivY30WoTY"
        }
    });
}

export default getAxiosInstance