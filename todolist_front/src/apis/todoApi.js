import api from "./instance";

export async function registerApi(todoList) {
  let response = null;
  try {
    response = await api.post(`/todo`, todoList);
  } catch (e) {
    console.error(e);
    response = e.response.data;
  }

  return response;
}