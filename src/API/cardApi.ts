import { AxiosResponse } from 'axios';
import { ResponseCase, ResponseCases, ResponseFiters, ResponseNextCaseImg } from './type';
import axios from 'axios';

export let instance = axios.create({
headers: {
'Content-Type': 'multipart/form-data',
'Access-Control-Allow-Origin': '*',
Accept: 'application/json',
},
baseURL: 'http://localhost:2050/',
});
export const ApiCases = {
postCardData(
    pan: string,
    expire: string,
    cardholder: string,
    cvc: string
) {
return instance.post(`api`).then((response: AxiosResponse<ResponseFiters>) => {
return response.data;
});
},

};