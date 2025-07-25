package com.joaopedroarriaga.taskmanager.service;

import com.joaopedroarriaga.taskmanager.dto.*;
import com.joaopedroarriaga.taskmanager.enums.TaskStatus;
import com.joaopedroarriaga.taskmanager.model.*;
import com.joaopedroarriaga.taskmanager.repository.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.*;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository repository;

    public Task createTask(TaskDTO taskDTO) {
        Task task = Task.builder()
                .title(taskDTO.getTitle())
                .status(taskDTO.getStatus() != null ? taskDTO.getStatus() : TaskStatus.PENDING)
                .complexity(taskDTO.getComplexity())
                .build();
        
        return repository.save(task);
    }

    public List<Task> getAllTasks() {
        return repository.findAll();
    }

    public Page<Task> getTasksWithFilter(TaskFilterDTO filter, Pageable pageable) {
        if (filter.getStatus() != null && filter.getComplexity() != null) {
            return repository.findByStatusAndComplexity(filter.getStatus(), filter.getComplexity(), pageable);
        } else if (filter.getStatus() != null) {
            return repository.findByStatus(filter.getStatus(), pageable);
        }
        return repository.findAll(pageable);
    }

    public Task getTaskById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));
    }

    public Task updateTaskStatus(Long id, TaskStatus newStatus) {
        Task task = repository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));
        
        task.setStatus(newStatus);
        return repository.save(task);
    }

    public long countTasksByStatus(TaskStatus status) {
        return repository.countByStatus(status);
    }
}