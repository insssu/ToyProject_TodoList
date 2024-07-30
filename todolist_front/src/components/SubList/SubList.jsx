import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SubList(props) {
    return (
        <div css={s.container}>
            <div>
                <div className='icon'>
                    <div className='status1'>미완료</div>
                    <div className='status2'>완료</div>
                </div>
            </div>
        </div>
    );
}

export default SubList;