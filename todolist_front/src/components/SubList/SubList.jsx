import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from "recoil";
import { modalAtom, selectMonthAtom, todoListAtom } from "../../atoms/todolistAtom";
import api from "../../apis/instance";
import { getTodoListByDateApi, modifyTodoCheckBoxStateApi } from "../../apis/todoApi";

function SubList() {
    const [isDone, setIsDone] = useState(false);
    const [todoList, setTodoList] = useRecoilState(todoListAtom);
    const [isModalOpen, setIsModalOpen] = useRecoilState(modalAtom);
    const [selectMonth, setSelectMonth] = useRecoilState(selectMonthAtom);

    const handleStateChangeClick = () => {
        console.log(isModalOpen);
        if (!isModalOpen) {
            setIsDone((isDone) => {
                return !isDone;
            });
        }
    };

    const requestTodoList = async () => {
        const response = await getTodoListByDateApi(selectMonth);
        setTodoList(response.data);
    }

    const handleCheckboxStateChange = async (todoId, state) => {
        const response = await modifyTodoCheckBoxStateApi(todoId, state);
        if(response.status === 200 && response.data > 0) {
            requestTodoList();
        }
    }

    return (
        <>
            <div css={s.container}>
                <div className="icon" onClick={handleStateChangeClick}>
                    <div className={`move ${isDone ? "right" : ""}`}></div>
                    <div className="status">미완료</div>
                    <div className="status">완료</div>
                </div>
                <div className="mini-box">
                    {todoList.map((todo) => {
                        if (!todo.state === !isDone) {
                            return (
                                <div className="card" key={todo.todoId}>
                                    <div className="info">
                                        <input type="checkbox" onChange={() => handleCheckboxStateChange(todo.todoId, todo.state)} checked={todo.state} id={todo.todoId} />
                                        <label htmlFor={todo.todoId}></label>
                                    </div>
                                    <p className="content">{todo.content}</p>
                                </div>
                            );
                        }
                        return;
                    })}
                </div>
            </div>
        </>
    );
}

export default SubList;
