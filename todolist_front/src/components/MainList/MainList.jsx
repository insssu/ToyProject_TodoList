import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import axios from 'axios';

function MainList() {
    const [ content, setContent ] = useState({
        content: "",
    });

    const handleContentInputChange = (e) => {
        setContent(content => ({
            ...content,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/todo", content)
            if (response.status === 200) {
                alert("등록");
            }

        } catch (e) {
            console.error(e);
        }
    }
 
    return (
        <>
            <div css={s.container}>
                <div className='input-box'>
                    <input 
                        type="text"
                        placeholder="해야 할 일 입력"
                        name="content"
                        onChange={handleContentInputChange}
                        />
                    <button onClick={handleSubmitClick}>추가</button>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <input type="checkbox" />
                        <button>수정</button>
                        <button>삭제</button>
                        <p>
                            <label htmlFor="">내용입력</label>
                        </p>
                    </div>
                    

                </div>
            </div>
        </>
    );
}

export default MainList;