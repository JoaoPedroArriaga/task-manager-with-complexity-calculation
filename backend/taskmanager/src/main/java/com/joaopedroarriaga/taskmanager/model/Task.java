package com.joaopedroarriaga.taskmanager.model;

import jakarta.persistence.*;
import com.joaopedroarriaga.taskmanager.enums.*;
import lombok.Data;

@Entity
@Table(name = "tasks")
@Data
@NoArgsContructor
@AllArgsContructor
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
    private TaskStatus status;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TaskComplexity complexity;

   /*
    * Task complexity points:
    * - SIMPLE: 1 point
    * - MEDIUM: 3 points
    * - COMPLEX: 5 points
    */
    private Integer complexityPoints;

    @PrePersist
    @PreUpdate
    private void calculateComplexityPoints() {
        this.complexityPoints = switch (complexity){
            case SIMPLE  -> 1;
            case MEDIUM  -> 3;
            case COMPLEX -> 5;
        };
    }
}