import React, { Children, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainContainer({children}) {
    
    return (
        <>
            <div css={s.container}>
                <div className='tag'>
                    <h1>TODO LIST</h1>
                </div>
            
                <div className='children-container'>
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainContainer;