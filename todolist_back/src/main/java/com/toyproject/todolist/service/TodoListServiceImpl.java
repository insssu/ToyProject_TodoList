package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.*;
import com.toyproject.todolist.entity.TodoList;
import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoListServiceImpl {

    @Autowired
    private TodoListMapper todoListMapper;

    public int registerTodo(ReqRegisterTodoListDto reqDto) {
        TodoList todoList = TodoList.builder()
                .content(reqDto.getContent())
                .date(reqDto.getDate())
                .build();
        return todoListMapper.save(todoList);
    }

    public int updateTodo(ReqUpdateTodoListDto reqDto) {
        TodoList todoList = TodoList.builder()
                .todoId(reqDto.getTodoId())
                .content(reqDto.getContent())
                .build();
        return todoListMapper.update(todoList);
    }

    public List<RespGetTodoListDto> getTodoList(String date) {
        List<RespGetTodoListDto> respDtos = new ArrayList<>();
        List<TodoList> todoLists = todoListMapper.findTodoListByDate(date);

        for(TodoList todo : todoLists) {
            RespGetTodoListDto dto = RespGetTodoListDto.builder()
                    .todoId(todo.getTodoId())
                    .content(todo.getContent())
                    .state(todo.getState())
                    .date(todo.getDate())
                    .build();
            respDtos.add(dto);
        }
        return respDtos;
    }

    public int deleteTodo(int todoId) {
        return todoListMapper.delete(todoId);
    }

    public RespGetTodoDto getTodo(int todoId) {
        TodoList getTodo = todoListMapper.findTodoById(todoId);
        return RespGetTodoDto.builder()
                .todoId(getTodo.getTodoId())
                .content(getTodo.getContent())
                .build();
    }

    public int updateCheckBoxState(ReqSetCheckboxStateDto reqDto) {
        TodoList todoList = TodoList
                .builder()
                .todoId(reqDto.getTodoId())
                .state(reqDto.getState() == 0 ? 1 : 0)
                .build();
        return todoListMapper.updateCheckboxState(todoList);
    }
}