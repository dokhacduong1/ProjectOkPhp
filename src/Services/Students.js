import { Post, Get} from "../Utils/request"
const apiNameGet = "students/getStudent.php"
const apiNameAdd = "students/addStudent.php"
const apiNameDelete = "students/deleteStudent.php"
const apiNameUpdate = "students/updateStudents.php"
export const getDataStudents = async ()=>{
    const result = await Get(apiNameGet);
    return result;
}
export const addDataStudents =async(data)=>{
    const result = await Post(apiNameAdd,data);
    return result;
}
export const deleteDataStudents =async(data)=>{
    const result = await Post(apiNameDelete,data);
    return result;
}
export const updateDataStudents =async(data)=>{
    const result = await Post(apiNameUpdate,data);
    return result;
}