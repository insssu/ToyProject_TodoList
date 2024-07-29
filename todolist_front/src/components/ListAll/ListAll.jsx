import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ListAll( { children } ) {
    return (
        <div css={s.form}>
            <div css={s.box}>
                <input type="text"/>
                <button>확인</button>
            </div>
            <div css={s.con}>

            </div>
        </div>
    );
}

export default ListAll;