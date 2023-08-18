package com.sas.backend.exception;

import com.sas.backend.entity.CustomError;
import com.sas.backend.exception.custom.BadRequestException;
import com.sas.backend.exception.custom.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class HandleException {
  @ExceptionHandler(NotFoundException.class)
  @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public Map<String, CustomError> NotFoundException(NotFoundException ex){
      return ex.getErrors();
  }

  @ExceptionHandler(BadRequestException.class)
  @ResponseStatus(value = HttpStatus.BAD_REQUEST)
  public Map<String, CustomError> BadRequestException(BadRequestException ex){
    return ex.getErrors();
  }


}
