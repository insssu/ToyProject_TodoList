package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReqGetTodoIdDto {
    private int todoId;
    private String content;
    private String date;
    private int state;

}
