package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqRegisterTodoListDto;
import com.toyproject.todolist.dto.ReqUpdateTodoListDto;
import com.toyproject.todolist.entity.TodoList;
import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class TodoListServiceImpl {

    @Autowired
    private TodoListMapper todoListMapper;

    public int registerTodoList(ReqRegisterTodoListDto reqDto) {
        String newTime = reqDto.getDate().substring(0, 7);
        TodoList todoList = TodoList.builder()
                .todoId(0)
                .content(reqDto.getContent())
                .date(newTime)
                .state(0)
                .build();
        return todoListMapper.save(todoList);
    }

    public int updateTodoList(ReqUpdateTodoListDto reqDto) {
        TodoList todoList = TodoList.builder()
                .todoId(reqDto.getTodoId())
                .content(reqDto.getMessage())
                .date(reqDto.getDate())
                .build();
        return todoListMapper.update(todoList);
    }
}
