package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqRegisterTodoListDto;
import com.toyproject.todolist.dto.ReqUpdateTodoListDto;
import com.toyproject.todolist.service.TodoListServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class TodoListController {

    @Autowired
    private TodoListServiceImpl todoListService;

    @PostMapping("/todo")
    private ResponseEntity<?> registerApi(@RequestBody ReqRegisterTodoListDto reqDto) {
        return ResponseEntity.ok().body(todoListService.registerTodoList(reqDto));
    }

    @PutMapping("/todo/{todoId}")
    private ResponseEntity<?> modifyApi(@PathVariable int todoListId, @RequestBody ReqUpdateTodoListDto reqDto) {
        return ResponseEntity.ok().body(todoListService.updateTodoList(reqDto));
    }

    @GetMapping("/todolist")
    private ResponseEntity<?> getListApi(@RequestBody ReqRegisterTodoListDto reqDto) {
        return null;
    }


    private ResponseEntity<?> getApi() {
        return null;
    }

    private ResponseEntity<?> removeApi() {
        return null;
    }
}