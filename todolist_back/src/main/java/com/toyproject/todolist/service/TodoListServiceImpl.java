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

    public int registerTodoList(ReqRegisterTodoListDto reqDto) {
        TodoList todoList = TodoList.builder()
                .content(reqDto.getContent())
                .date(reqDto.getDate())
                .state(reqDto.getState())
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

    public List<RespGetTodoListDto> getTodoList() {
        List<RespGetTodoListDto> respDtos = new ArrayList<>();
        List<TodoList> todoLists = todoListMapper.findTodoListById();
        System.out.println(todoLists );
        for (TodoList tdl : todoLists) {
            RespGetTodoListDto respDto = RespGetTodoListDto.builder()
                    .todoId(tdl.getTodoId())
                    .content(tdl.getContent())
                    .date(tdl.getDate())
                    .build();
            respDtos.add(respDto);
        }
        return respDtos;
    }

//    public int getTodoId(int id) {
//
//        return null;
//    }

    public int deleteTodoList(int todoId) {
        return todoListMapper.delete(todoId);
    }
}
