package com.joaopedroarriaga.taskmanager.dto;

import com.joaopedroarriaga.taskmanager.enums.*;
import jakarta.validation.contraints.*;
import lombok.*;

@Data
@NoArgsContructor
@AllArgsContructor
@Builder
public class TaskDTO {
    @NotBlank(message = "Title is required")
    private String title;

    private TaskStatus status;

    @NotNull(message = "Complexity is required")
    private TaskComplexity complexity;
}
