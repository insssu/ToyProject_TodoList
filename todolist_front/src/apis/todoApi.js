import api from "./instance";

// 할일 등록
export async function registerTodoApi(todoList) {
    let response = null;
    try {
        response = await api.post(`/todo`, todoList);
    } catch (e) {
        console.error(e);
        response = e.response.data;
    }
    return response;
}

// 다건조회
export async function getTodoListByDateApi(date) {
    let response = null;
    try {
        response = await api.get(`/todolist/${date}`);
    } catch (e) {
        console.error(e);
        response = e.response.data;
    }
    return response;
}

// 단건조회
export async function getTodoByIdApi(id) {
    let response = null;
    try {
        response = await api.get(`/todo/${id}`);
    } catch (e) {
        console.error(e);
        response = e.response.data;
    }
    return response;
}

// 할일 삭제
export async function deleteTodoApi(id) {
    let response = null;
    try {
        response = await api.delete(`/todo/${id}`);
    } catch (e) {
        console.error(e);
        response = e.response.data;
    }
    return response;
}

// 할일 수정
export async function modifyTodoApi(newTodo) {
    let response = null;
    try {
        response = await api.put(`/todo/${newTodo.todoId}`, newTodo);
    } catch(e) {
        console.error(e);
        response = e.response.data;
    }
    return response;
}

// 체크 박스 상태 변경
export async function modifyTodoCheckBoxStateApi(todoId, state) {
    console.log(`checkbox: ${todoId}, ${state}`);
    let response = null;
    try {
        response = await api.put(`/todo/checkbox`, { todoId, state });
    } catch(e) {
        console.error(e);
        response = e.response.data;
    }
    return response;
}