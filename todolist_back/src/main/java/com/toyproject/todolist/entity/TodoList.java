package com.toyproject.todolist.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TodoList {
    private int todoId;
    private String message;
    private String date;
}
