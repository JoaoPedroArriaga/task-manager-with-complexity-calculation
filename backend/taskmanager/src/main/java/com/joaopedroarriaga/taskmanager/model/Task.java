package com.joaopedroarriaga.taskmanager.model;

import jakarta.persistence.*;
import com.joaopedroarriaga.taskmanager.enums.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private TaskStatus status = TaskStatus.PENDING;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TaskComplexity complexity;

    private Integer complexityPoints;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @PrePersist
    @PreUpdate
    private void calculateComplexityPoints() {
        this.complexityPoints = switch (complexity) {
            case SIMPLE -> 1;
            case MEDIUM -> 3;
            case COMPLEX -> 5;
        };
    }
}