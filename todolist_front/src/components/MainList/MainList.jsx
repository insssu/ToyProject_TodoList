import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import axios from 'axios';
import api from '../../apis/instance';
import ReactModal from 'react-modal';
import { css } from '@emotion/react';
ReactModal.setAppElement("#root")

function MainList() {
    const [ updateTodoList, setUpdateTodoList ] = useState({
        todoId: "",
        content: "",
        date: "",
        state: 0
    })
    const [ isModalOpen, setModalOpen ] = useState(false);
    const [ todoList, setTodoList ] = useState([]);
    const [ content, setContent ] = useState({ 
        content: "",
        date: "2024-08",
        state: 0
     });

    useEffect(() => {
        handleGetTodoList()
    }, []);

    const handleTodoInputChange = (e) => {
        setContent({
            ...content,
            [e.target.name]: e.target.value
        })
    }

    const handleTodoSubmitClick = async () => {
        try {
            const response = await api.post(`http://localhost:8080/api/v1/todo`, content)
            console.log(response)
            handleGetTodoList()
        } catch (e) {
            console.error(e)
        }

        setContent(content => {
            return {
                content: "",
                date: ""
            }
        });
    }

    const handleGetTodoList = async () => {
        try {
            const response = await api.get(`/todolist`);
            setTodoList(response.data);
            console.log(response.data);
            console.log(todoList)
        } catch (e) {
            console.error(e)
        }
    }

    const closeModal = () => {
        setModalOpen(false);
        setTodoList({
            content: "",
            date: "",
            state: 0
        })
    }

    const handleUpdateInputChange = (e) => {
        setUpdateTodoList(utdl => {
            return {
                ...utdl,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleUpdateSubmitClick = async () => {
        await requestUpdateTodoList();

        closeModal();
    }

    const requestGetTodoList = async (todoId) => {
        let responseData = null;
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/todolist`);
            responseData = response.data;
        } catch (e) {
            console.error(e);
        }
        return responseData;
    }

    const requestUpdateTodoList = async () => {
        let responseData = null;

        try {
            const response = await axios.put(`http://localhost:8080/api/v1/todolist`, updateTodoList);
            responseData = response.data;
        } catch (e) {
            console.error(e)
        }

        return responseData;

    }

    const handleUpdateTodoListClick = (todoId) => {
        setModalOpen(true);
        const data = requestGetTodoList(todoId);
        // setUpdateTodoList();
        // closeModal();
    }

    return (
        <>  
            <ReactModal style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        padding: '20px',
                        width: '400px',
                        height: '300px',
                        backgroundColor: '#fafafa',
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <div css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                `}>
                    <h2>TODO LIST 수정</h2>
                    <input type="text" name='todoId' onChange={handleUpdateInputChange} value={updateTodoList.todoId} disabled={true}/>
                    <input type="text" name='content' onChange={handleUpdateInputChange} value={updateTodoList.content} />
                    <div>
                        <button onClick={handleUpdateSubmitClick}>확인</button>
                        <button onClick={() => closeModal()} >취소</button>
                    </div>
                </div>
            </ReactModal>
            <div css={s.container}>
                <div className='input-box'>
                    <input 
                        type="text"
                        className='todo-input'
                        placeholder=" 할 일을 입력해주세요."
                        name="content"
                        onChange={handleTodoInputChange}
                        
                        />
                    <button onClick={handleTodoSubmitClick}>추가</button>
                </div>
                <div className='card-container'>
                    {todoList.map(todo => (     // 람다식이다~ 소괄호다~
                        <div className='card'>
                            <div className='card-tag'>
                                <input 
                                    type="checkbox" 
                                />
                                <p>{todo.date}</p>
                                <button className='edit' onClick={() => handleUpdateTodoListClick(todo.todoId)} >수정</button>
                                <button className='delete'>삭제</button>
                            </div>
                            <p>
                                <label htmlFor="">{todo.content}</label>
                            </p>
                        </div>
                    ))}
                    

                </div>
            </div>
        </>
    );
}

export default MainList;