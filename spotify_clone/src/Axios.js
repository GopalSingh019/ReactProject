import axios from "axios";
import { accessToken } from "./credentials/token";


let token = accessToken().access_token;


const baseurl = 'https://api.spotify.com/v1';
// console.log("aios-" + token);
const instance = axios.create({
    baseURL: baseurl,
    Authorization: {bearer: token},
    headers: { Authorization:"Bearer "+token }
})

export default instance;