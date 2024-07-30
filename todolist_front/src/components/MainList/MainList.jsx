import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainList(props) {
    return (
        <>
            <div css={s.container}>
                <div className='input-box'>
                    <input type="text"  />
                    <button className='submit-button'>추가</button>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <div className='button-box'>
                            <input type="checkbox" />
                            <button className=''>수정</button>
                            <button className=''>삭제</button>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainList;