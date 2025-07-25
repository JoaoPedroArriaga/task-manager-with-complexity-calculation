package com.joaopedroarriaga.taskmanager.controller;

import com.joaopedroarriaga.taskmanager.dto.*;
import com.joaopedroarriaga.taskmanager.model.*;
import com.joaopedroarriaga.taskmanager.service.*;
import jakarta.validation.*;
import lombok.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<Task> createTask(@Valid @RequestBody TaskDTO taskDTO) {
        Task createTask = taskService.createTask(taskDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createTask);
    }
}
