package com.joaopedroarriaga.taskmanager.repository;

import com.joaopedroarriaga.taskmanager.enums.*;
import com.joaopedroarriaga.taskmanager.model.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    Page<Task> findByStatusAndComplexity(
        TaskStatus status,
        TaskComplexity complexity,
        Pageable pageable
    );
    
    Page<Task> findByStatus(TaskStatus status, Pageable pageable);
    
    long countByStatus(TaskStatus status);
}