import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from "../../apis/instance";
import axios from "axios";

function MainList(props) {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    requestTodoList();
  }, [todoList]);

  const handleRegisterInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRegisterSubmitClick = async () => {
    const newReigster = {
      content: inputValue,
      date: new Date(),
    };
    let response = null;
    try {
      response = await api.post("/todo", newReigster);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
    setInputValue("");
  };

  const requestTodoList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/todolist");
      console.log(response.data);
      setTodoList(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteClick = async (todoId) => {
    
  }

  const requestDelete = async (todoId) => {
    let responseData = null;

    try {

    } catch(e) {
      console.error(e);
    }
  }
  return (
    <div css={s.container}>
      <div className="input-box">
        <input
          type="text"
          onChange={handleRegisterInputChange}
          value={inputValue}
        />
        <button onClick={handleRegisterSubmitClick}>추가</button>
      </div>
      <div className="mini-box">
        {todoList.map((todoList) => (
          <div className="card" key={todoList.todoId}>
            <div className="info">
              <input type="checkbox" />
              <p>{todoList.date}</p>
              <div className="buttons">
                <button>수정</button>
                <button>삭제</button>
              </div>
            </div>
            <p>{todoList.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainList;
