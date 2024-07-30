import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainContainer(props) {
    return (
        <>
            <div css={s.container}>
                <h1>TODO LIST</h1>
                <div css={s.list_container}>
                    <input type="text" />

                </div>
                <div>

                </div>
        
            </div>
            
        </>
    );
}

export default MainContainer;