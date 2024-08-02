package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ReqGetTodoListDto {
    private int todoId;
    private String content;
    private String date;
}
