import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainContainer({ children }) {
    return (
        <>
            <div css={s.headline}>
                <h1>TODO LIST</h1>
                <p>2024-07</p>
            </div>
                <div css={s.layout}>
                    {children}
                </div>
        </>
    );
}

export default MainContainer;