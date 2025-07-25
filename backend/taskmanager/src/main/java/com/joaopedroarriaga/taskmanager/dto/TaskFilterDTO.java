package com.joaopedroarriaga.taskmanager.dto;

import com.joaopedroarriaga.taskmanager.enums.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TaskFilterDTO {
    private TaskStatus status;
    private TaskComplexity complexity;
}