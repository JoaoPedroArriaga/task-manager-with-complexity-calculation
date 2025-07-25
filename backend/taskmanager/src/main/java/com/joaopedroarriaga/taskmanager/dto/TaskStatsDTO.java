package com.joaopedroarriaga.taskmanager.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskStatsDTO {
    private long pendingTasks;
    private long inProgressTasks;
    private long completedTasks;
}