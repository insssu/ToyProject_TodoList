package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RespGetTodoListDto {
    private int todoId;
    private String message;
    private String date;
}
