import axios from "axios";
import { CreateUser, GetUser, UpdateUser } from "../types/user.type";
import { API_URL } from "../utils/constants";
import { GetToken } from "../utils/persists";

export const create_user = async (values: CreateUser) => {
    const { data } = await axios.post<{ ok: boolean; msg: string }>(
        API_URL + "/user",
        values,
    );
    return data;
};

export const get_user = async () =>{
    const { data } = await axios.get<{users: GetUser[]}>(API_URL + "/user", {
        headers:{
            Authorization: "Bearer " + GetToken(),
        },
    });
    return data;
};

export const update_user = async (id:number ,values: UpdateUser) =>{
    const { data } = await axios.put<{ ok:boolean }>(
        API_URL + "/user/" +id ,
        values,
        {
            headers: {
            Authorization: "Bearer " + GetToken(),
            },
        }
    );
    return data;
};

export const delete_user = async (id:number) => {
    const { data } = await axios.delete<{ ok: boolean; msg: string }>(
        API_URL + "/user/" + id,
        {
            headers: {
                Authorization: "Bearer " + GetToken(),
                },
        }
    );
    return data;
}
