import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCheckCircle } from "react-icons/fa";
import { getComputerApi } from '../../apis/computerApi';
import { RegisterTodo } from '../../apis/todoApi';
import axios from 'axios';
import api from '../../apis/instance';

function MainList(props) {

    const emtpyTodo = {
        id: "",
        content: "",
        date: "",
        state: ""
    }

    const [ inputValue, setInputValue ] = useState("");

    const [ todo, setTodo ] = useState(emtpyTodo);

    const [ todoList, setTodoList ] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleRegisterClick = () => {
        const registerTodo = {
            content: inputValue,
            date: new Date()
        }
        const response = RegisterTodo(registerTodo);
        console.log(response);
        setInputValue("");
    }

    return (
        <div css={s.container}>
            <div className="input-box">
                <input type="text" onChange={handleInputChange} value={inputValue}/>
                <button onClick={handleRegisterClick}>추가</button>
            </div>
            <div className='mini-box'>
                <div className='card'>
                    <div className='info'>
                        <input type="checkbox" />
                        <p>2024-07-29</p>
                        <div className='buttons'>
                            <button>수정</button>
                            <button>삭제</button>
                        </div>
                    </div>
                    <p>내용입니다.</p>
                </div>
            </div>
        </div>
    );
}

export default MainList;