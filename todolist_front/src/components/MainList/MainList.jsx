import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from "../../apis/instance";
import ReactModal from "react-modal";
import { modalAtom, selectMonthAtom, todoListAtom } from "../../atoms/todolistAtom";
import { useRecoilState } from "recoil";
import { deleteTodoApi, getTodoByIdApi, getTodoListByDateApi, modifyTodoApi, modifyTodoCheckBoxStateApi, registerTodoApi } from "../../apis/todoApi";

function MainList(props) {
    const emptyModifyInput = {
        todoId: "",
        content: ""
    };

    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useRecoilState(todoListAtom);
    const [isModalOpen, setIsModalOpen] = useRecoilState(modalAtom);
    const [modifyInput, setModifyInput] = useState(emptyModifyInput);
    const [selectMonth, setSelectMonth] = useRecoilState(selectMonthAtom);

    useEffect(() => {
        requestTodoList();
    }, [selectMonth]);

    const handleRegisterInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleRegisterSubmitClick = async () => {
        if (inputValue.trim() !== '') {
            const newRegister = {
                content: inputValue,
                date: selectMonth,
            };
            const response = await registerTodoApi(newRegister);
            if (response.status === 200 && response.data > 0) {
                alert("등록성공!");
            } else {
                alert("등록실패");
            }
        } else {
            alert("작성하신 내용이 없습니다.")
            return;
        }
        setInputValue("");
        requestTodoList();
    };

    const requestTodoList = async () => {
        const response = await getTodoListByDateApi(selectMonth);
        setTodoList(response.data);
    }

    const handleDeleteClick = async (todoId) => {
        if (window.confirm("삭제하시면 되돌릴 수 없습니다.\n그래도 삭제하시겠습니까?")) {
            const response = await deleteTodoApi(todoId);
            if (response.status === 200 && response.data > 0) {
                alert("삭제 완료!");
                requestTodoList();
                return;
            }
            alert("삭제 실패!");
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setModifyInput(emptyModifyInput);
    }

    const handleModifyClick = async (todoId) => {
        setIsModalOpen(true);
        const response = await getTodoByIdApi(todoId);
        setModifyInput(response.data);
    }

    const handleModifySubmitClick = async () => {
        const response = await modifyTodoApi(modifyInput);
        if(response.status === 200 && response.data > 0) {
            alert("수정 완료!");
            requestTodoList();
        } else {
            alert("수정 실패");
        }
        closeModal();
    }

    const handleModifyInputChange = (e) => {
        setModifyInput(modifyInput => {
            return {
                ...modifyInput,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleCheckboxStateChange = async (todoId, state) => {
        const response = await modifyTodoCheckBoxStateApi(todoId, state);
        if(response.status === 200 && response.data > 0) {
            requestTodoList();
        }
    }

    const handleOnkeyDown = (e) => {
        if (e.keyCode === 13) {
            handleRegisterSubmitClick();
        }
    };

    const handleOnkeyDownModal = (e) => {
        if (e.keyCode === 13) {
            handleModifySubmitClick();
        }
    }

    return (
        <>
            <ReactModal css={s.modal}
                isOpen={isModalOpen} onRequestClose={closeModal} ariaHideApp={false}>
                <div css={s.modfiy}>
                    <h2>TODO LIST 수정</h2>
                    <input
                        type="text"
                        name="content"
                        onChange={handleModifyInputChange}
                        value={modifyInput.content}
                        onKeyDown={handleOnkeyDownModal}
                        autoFocus
                    />
                    <div css={s.button}>
                        <button onClick={handleModifySubmitClick}>수정</button>
                        <button onClick={() => closeModal()}>취소</button>
                    </div>
                </div>
            </ReactModal>

            <div css={s.container}>
                <div className="input-box">
                    <input
                        type="text"
                        onChange={handleRegisterInputChange}
                        value={inputValue}
                        placeholder="할 일을 입력해주세요"
                        onKeyDown={handleOnkeyDown}
                        maxLength={70}
                    />
                    <button onClick={handleRegisterSubmitClick}
                        onKeyDown={handleOnkeyDown}
                        name="button">추가
                    </button>
                </div>
                <div className="mini-box">
                    {todoList.map(todoList => (
                        <div className="card" key={todoList.todoId}>
                            <div className="info">
                                <input type="checkbox" onChange={() => handleCheckboxStateChange(todoList.todoId, todoList.state)} checked={todoList.state} id={todoList.todoId} />
                                <label htmlFor={todoList.todoId}></label>
                                <p>{todoList.date}</p>
                                <div className="buttons">
                                    <button onClick={() => handleModifyClick(todoList.todoId)}>수정</button>
                                    <button onClick={() => handleDeleteClick(todoList.todoId)}>삭제</button>
                                </div>
                            </div>
                            <p className="todo-content">{todoList.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MainList;
