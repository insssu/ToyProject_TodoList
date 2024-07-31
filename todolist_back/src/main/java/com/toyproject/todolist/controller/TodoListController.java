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
    public ResponseEntity<?> registerApi(@RequestBody ReqRegisterTodoListDto reqDto) {
        log.info("{}",reqDto);
        return ResponseEntity.ok().body(todoListService.registerTodoList(reqDto));
    }

    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> modifyApi(@PathVariable int todoId, @RequestBody ReqUpdateTodoListDto reqDto) {
        return ResponseEntity.ok().body(todoListService.updateTodoList(reqDto));
    }

    @GetMapping("/todolist")
    public ResponseEntity<?> getListApi() {
        return ResponseEntity.ok().body(todoListService.getTodoList());
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> removeApi(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoListService.deleteTodoList(todoId));
    }
}