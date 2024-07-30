import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SubList(props) {
    return (
        <>
            <div css={s.container}>
                <h3 className='uncomplete'>미완료</h3>
                <h3 className='complete'>완료</h3>
            </div>  
        </>
    );
}

export default SubList;