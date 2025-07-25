package com.joaopedroarriaga.taskmanager.controller;

import com.joaopedroarriaga.taskmanager.dto.*;
import com.joaopedroarriaga.taskmanager.model.*;
import com.joaopedroarriaga.taskmanager.service.*;
import com.joaopedroarriaga.taskmanager.enums.*;
import jakarta.validation.*;
import org.springframework.data.domain.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@Valid @RequestBody TaskDTO taskDTO) {
        Task createdTask = taskService.createTask(taskDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
    }

    @GetMapping
    public ResponseEntity<Page<Task>> getAllTasks(
            @Valid TaskFilterDTO filter,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "DESC") Sort.Direction direction) {
        
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
        Page<Task> tasks = taskService.getTasksWithFilter(filter, pageable);
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        return ResponseEntity.ok(taskService.getTaskById(id));
    }

    @GetMapping("/stats")
    public ResponseEntity<TaskStatsDTO> getTaskStats() {
        long pending = taskService.countTasksByStatus(TaskStatus.PENDING);
        long inProgress = taskService.countTasksByStatus(TaskStatus.IN_PROGRESS);
        long completed = taskService.countTasksByStatus(TaskStatus.COMPLETED);
        
        TaskStatsDTO stats = new TaskStatsDTO(pending, inProgress, completed);
        return ResponseEntity.ok(stats);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Task> updateTaskStatus(
            @PathVariable Long id,
            @Valid @RequestBody StatusUpdateDTO statusUpdate) {
        
        Task updatedTask = taskService.updateTaskStatus(id, statusUpdate.getStatus());
        return ResponseEntity.ok(updatedTask);
    }
}