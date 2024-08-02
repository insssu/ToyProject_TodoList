import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from "recoil";
import { modalAtom, todoListAtom } from "../../atoms/todolistAtom";

function SubList(props) {
  const [isDone, setIsDone] = useState(false);
  const [todolist, setTodolist] = useRecoilState(todoListAtom);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalAtom);

  const handleStateChangeClick = () => {
    if(!isModalOpen) {
      setIsDone((isDone) => {
        return !isDone;
      }); 
    }
  };

  return (
    <>
      <div css={s.container}>
          <div className="icon" onClick={handleStateChangeClick}>
            <div className={`move ${isDone ? "right" : ""}`}></div>
            <div className="status">미완료</div>
            <div className="status">완료</div>
          </div>
          <div className="mini-box">
            {todolist.map((todo) => {
              if (!todo.state === !isDone) {
                return (
                  <div className="card" key={todo.todoId}>
                    <div className="info">
                      <p>{todo.date}</p>
                    </div>
                      <p>{todo.content}</p>
                  </div>
                );
              }
              return;
            })}
          </div>
      </div>
    </>
  );
}

export default SubList;
