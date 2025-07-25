package com.joaopedroarriaga.taskmanager.dto;

import com.joaopedroarriaga.taskmanager.enums.TaskStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class StatusUpdateDTO {
    @NotNull(message = "Status is required")
    private TaskStatus status;
}