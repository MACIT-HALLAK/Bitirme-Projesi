import axios from "axios";

class RestApi {
    static GetRequest = (geturl)=>{
        return axios.get(geturl).then(response=>{
            return response.data;
        }).catch(error=>{
            return 'erroe';
        });
    }








    

    static PostRequest =(postUrl,postJson)=>{
        let config={
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios.post(postUrl,postJson,config).then(response=>{
            return response.data;
        }).catch(error=>{
            return null
        });
    }
}
export default RestApi;