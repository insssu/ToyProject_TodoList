package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqRegisterTodoListDto;
import com.toyproject.todolist.dto.ReqSetCheckboxStateDto;
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
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todoListService.registerTodo(reqDto));
    }

    @GetMapping("/todolist/{date}")
    public ResponseEntity<?> getTodoListApi(@PathVariable String date) {
        log.info("{}", date);
        return ResponseEntity.ok().body(todoListService.getTodoList(date));
    }

    @GetMapping("/todo/{todoId}")
    public ResponseEntity<?> getApi(@PathVariable int todoId) {
        log.info("{}", todoId);
        return ResponseEntity.ok().body(todoListService.getTodo(todoId));
    }

    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> modifyApi(@PathVariable int todoId, @RequestBody ReqUpdateTodoListDto reqDto) {
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todoListService.updateTodo(reqDto));
    }

    @PutMapping("/todo/checkbox")
    public ResponseEntity<?> modifyCheckBoxStateApi(@RequestBody ReqSetCheckboxStateDto reqDto) {
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todoListService.updateCheckBoxState(reqDto));
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> removeApi(@PathVariable int todoId) {
        log.info("{}", todoId);
        return ResponseEntity.ok().body(todoListService.deleteTodo(todoId));
    }
}
