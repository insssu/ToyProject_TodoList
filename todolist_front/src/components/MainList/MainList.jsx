import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainList(props) {
    return (
        <>
            <div css={s.container}>
                <div className='input-box'>
                    <input type="text" />
                    <button>추가</button>
                </div>
                <div className='list-container'>
                    <div className='list'>
                        <input type="checkbox" />
                        <button>수정</button>
                        <button>삭제</button>
                        <p>
                            내용입력
                        </p>
                    </div>
                    

                </div>
            </div>
        </>
    );
}

export default MainList;