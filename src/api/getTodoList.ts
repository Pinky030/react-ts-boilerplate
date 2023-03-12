import axios from "axios"

export const getTodoList = async() => {
    return axios.get("https://jsonplaceholder.typicode.com/todos")

}