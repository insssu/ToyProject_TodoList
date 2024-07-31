package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ReqRegisterTodoListDto {
    private String content;
    private String date;
}
