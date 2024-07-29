import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ListAll() {

    const handleTodoInputChange = (e) => {
        
    }

    const handleSubmit = () => {

    }

    const closeModal = () => {
        setModalOpen(false);
        
    }

    const handle

    return (
        <div css={s.container}>
            <h1 class="title">TODO LIST</h1>
            <div css={s.input}>
                <input type="text" onChange={handleTodoInputChange} value={}/>
                <button onClick={handleSubmit}>확인</button>
            </div>
            <ReactModal>
                style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        padding: '20px',
                        width: '400px',
                        height: '500px',
                        backgroundColor: '#fafafa',
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                <div css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                `}>
                    <h2>TODO 수정</h2>
                    <input type="text" name='todoList' onChange={handleUpdateChange} value={updateTodoList} />
                    <div>
                        <button onClick={handleUpdateSubmitClick}>확인</button>
                        <button onClick={() => closeModal()}>취소</button>
                    </div>
                </div>

                <div class="modal" onClick={handleModalBackgroundClick}>
                    <div>
                        <h3 class="modal-title">TODO 수정</h3>
                        <div class="input-box">
                            <input type="text" class="todo-input" />
                        </div>
                        <div class="todo-buttons">
                            <button class="button">확인</button>
                            <button class="button">취소</button>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}

export default ListAll;