import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function UncompletedList({ children }) {
    return (
        <div css={s.form}>
            <h2>미완료 리스트</h2>
            <div css={s.con}>
                {children}
            </div>
        </div>
    );
}

export default UncompletedList;