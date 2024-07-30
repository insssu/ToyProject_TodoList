import api from "./instance";

export async function RegisterTodo(todo) {
    let response = null;
    try {
        response = api.post(`/todo`, todo);
    } catch (e) {
        console.error(e);
    }
    return response;
}