package com.joaopedroarriaga.taskmanager.service;

import com.joaopedroarriaga.taskmanager.dto.*;
import com.joaopedroarriaga.taskmanager.enums.TaskStatus;
import com.joaopedroarriaga.taskmanager.model.*;
import com.joaopedroarriaga.taskmanager.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository repository;

    public Task createTask(TaskDTO taskDTO) {
        Task task = Task.builder()
            .title(taskDTO.getTitle())
            .status(taskDTO.getStatus() != null ?
            taskDTO.getStatus() : TaskStatus.PENDING)
            .complexity(taskDTO.getComplexity())
            .build();
        
        return repository.save(task);
    }
}
