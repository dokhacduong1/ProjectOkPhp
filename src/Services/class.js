import { Post, Get} from "../Utils/request"
const apiNameGet = "/class/getClass.php"
const apiNameAdd = "/class/addClass.php"
const apiNameDelete = "/class/deleteClass.php"
const apiNameUpdate = "/class/updateClass.php"
export const getDataClass = async ()=>{
    const result = await Get(apiNameGet);
    return result;
}
export const addDataClass =async(data)=>{
    const result = await Post(apiNameAdd,data);
    return result;
}
export const deleteDataClass =async(data)=>{
    const result = await Post(apiNameDelete,data);
    return result;
}
export const updateDataClass=async(data)=>{
    const result = await Post(apiNameUpdate,data);
    return result;
}