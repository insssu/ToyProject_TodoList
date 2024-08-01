package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;


@Data
public class ReqGetTodoListDto {
    private int todoId;
    private String content;
}
