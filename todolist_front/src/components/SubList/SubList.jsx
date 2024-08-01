import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import * as s from './style';
import api from '../../apis/instance';
import { useRecoilState } from 'recoil';
import { todoListAtom } from '../../atoms/todolistAtom';

function SubList(props) {
  
  const [isDone, setIsDone ] = useState(false);
  const [todolist, setTodolist ] = useRecoilState(todoListAtom);

  const handleStateChangeClick = () => {
    setIsDone(isDone => {
      return !isDone
    });
  }

  useEffect(() => {
    requestTodolist();
  }, [isDone])



  const requestTodolist = async() => {
    let responseData = null;
    try {
      const response = await api.get(`/todos/${isDone ? 1 : 0}`);
      responseData = response.data;
    }catch(e) {
      console.error(e);
    }
    console.log(responseData);
    setTodolist(responseData);
  }



  return (
    <>
      <div css={s.container}>
        <div>
          <div className='icon' onClick={handleStateChangeClick}>
            <div className={`move ${isDone ? "right" : "" }`}></div>
            <div className='status'>미완료</div>
            <div className='status'>완료</div>
          </div>
          {
            todolist.map(todo => (
              <div key={todo.todoId}>
                <p>{todo.content}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SubList;
