package com.joaopedroarriaga.taskmanager.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TaskStatsDTO {
    private long pendingTasks;
    private long inProgressTasks;
    private long completedTasks;
    
    // Optional: Add derived property
    public long getTotalTasks() {
        return pendingTasks + inProgressTasks + completedTasks;
    }
}