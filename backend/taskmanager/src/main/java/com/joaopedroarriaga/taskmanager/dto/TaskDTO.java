package com.joaopedroarriaga.taskmanager.dto;

import com.joaopedroarriaga.taskmanager.enums.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskDTO {
    @NotBlank(message = "Title is required")
    private String title;

    private TaskStatus status;

    @NotNull(message = "Complexity is required")
    private TaskComplexity complexity;
}
