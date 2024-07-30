import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";   

function MainContainer({children}) {
    return (
        <div css={s.main}>
            <h1>TODO LIST</h1>
            <div css={s.container}>
                {children}
            </div>
            
        </div>
    );
}

export default MainContainer;