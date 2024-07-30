package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqRegisterTodoListDto {
    private int todoId;
    private String message;
    private String date;
}
