package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqUpdateTodoListDto {
    private int todoId;
    private String message;
    private String date;
}
