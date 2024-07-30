package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqRegisterTodoListDto;
import com.toyproject.todolist.dto.ReqUpdateTodoListDto;
import com.toyproject.todolist.entity.TodoList;
import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListServiceImpl {

    @Autowired
    private TodoListMapper todoListMapper;

    public int registerTodoList(ReqRegisterTodoListDto reqDto) {
        TodoList todoList = TodoList.builder()
                .todoId(reqDto.getTodoId())
                .message(reqDto.getMessage())
                .date(reqDto.getDate())
                .build();

        return todoListMapper.save(todoList);
    }

    public int updateTodoList(ReqUpdateTodoListDto reqDto) {
        TodoList todoList = TodoList.builder()
                .todoId(reqDto.getTodoId())
                .message(reqDto.getMessage())
                .date(reqDto.getDate())
                .build();
        return todoListMapper.update(todoList);
    }
}
