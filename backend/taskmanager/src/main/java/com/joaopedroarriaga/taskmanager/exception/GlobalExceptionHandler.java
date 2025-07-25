package com.joaopedroarriaga.taskmanager.exception;

import java.net.ResponseCache;

import org.springframework.http.*;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> handleValidationException(MethodArgumentNotValidException ex) {
        String errorMessage = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(error -> error.getField() + ":" + error.getDefaultMessage())
            .findFirst()
            .orElse("Validation error");

        return ResponseEntity.badRequest().body(errorMessage);
    }
}
