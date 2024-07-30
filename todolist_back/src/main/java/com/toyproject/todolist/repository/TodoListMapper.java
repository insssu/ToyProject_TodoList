package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.TodoList;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface TodoListMapper {
    int save(TodoList todoList);
    TodoList findTodoListById(int id);

    int delete(int todoList);
    int update(TodoList todoList);
}
