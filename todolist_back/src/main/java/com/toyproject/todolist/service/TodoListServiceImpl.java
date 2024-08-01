package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqGetTodoListDto;
import com.toyproject.todolist.dto.ReqRegisterTodoListDto;
import com.toyproject.todolist.dto.ReqUpdateTodoListDto;
import com.toyproject.todolist.dto.RespGetTodoListDto;
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

    public int registerTodoList(ReqRegisterTodoListDto reqDto) {
        TodoList todoList = TodoList.builder()
                .todoId(reqDto.getTodoId())
                .content(reqDto.getContent())
                .date(reqDto.getDate())
                .build();

        return todoListMapper.save(todoList);
    }

    public int updateTodoList(ReqUpdateTodoListDto reqDto) {
        TodoList todoList = TodoList.builder()
                .todoId(reqDto.getTodoId())
                .content(reqDto.getContent())
                .date(reqDto.getDate())
                .build();
        return todoListMapper.update(todoList);
    }

    public List<RespGetTodoListDto> getTodoList(ReqGetTodoListDto reqDto) {
        List<RespGetTodoListDto> respDtos = new ArrayList<>();

        TodoList todoList = TodoList.builder()
                .content(reqDto.getContent())
                .date(reqDto.getContent())
                .build();

        List<TodoList> todoLists = todoListMapper.findTodoListByTodoId(todoList);

        for(TodoList todo : todoLists) {
            RespGetTodoListDto dto = RespGetTodoListDto.builder()
                    .todoId(todo.getTodoId())
                    .content(todo.getContent())
                    .date(todo.getDate())
                    .build();
            respDtos.add(dto);
        }
        return respDtos;
    }

    public int deleteTodoList(int todoId) {
        return todoListMapper.delete(todoId);
    }
}
