package goupb.webproject.Webproject.controller;

import goupb.webproject.Webproject.exception.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class UserControllerAdvice {
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<Void> handleNotFoundException(){

        return ResponseEntity.status(404).build();
    }
}
