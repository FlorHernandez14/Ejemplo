import axios from 'axios';
import { API_URL } from '../utils/constants';
import { MakeLoginData, Response } from '../types/auth.type';


export async function make_login(values: MakeLoginData) {
    const data = await axios.post<Response>(API_URL + "/user/login", values);
    return data
}


