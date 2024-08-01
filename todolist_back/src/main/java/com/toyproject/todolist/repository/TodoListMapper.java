package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.TodoList;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface TodoListMapper {
    int save(TodoList todoList);
    List<TodoList> findTodoListByTodoId(TodoList todoList);     // 확인필요
    int delete(int todoList);
    int update(TodoList todoList);
}
