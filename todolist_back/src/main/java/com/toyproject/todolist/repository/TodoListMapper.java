package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.TodoList;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface TodoListMapper {
    int save(TodoList todoList);

    List<TodoList> findTodoListById();

    TodoList getId(int todoId);

    int update(TodoList todoList);

    int delete(int todoId);

}
