import React, { Children, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { selectMonthAtoms } from '../../atoms/todoListAtom';
import { useRecoilState } from 'recoil';

function MainContainer({children}) {
    const [ selectMonth, setSelectMonth ] = useRecoilState(selectMonthAtoms);

    const handleMonthChange = (e) => {
        setSelectMonth(e.target.value);
    }
    
    return (
        <>
            <div css={s.container}>
                <div className='tag'>
                    <h1>TODO LIST</h1>
                    <input type="month" className='month' onChange={handleMonthChange} value={selectMonth}/>
                </div>
            
                <div className='children-container'>
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainContainer;