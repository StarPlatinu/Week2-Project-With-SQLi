package com.sas.backend.exception.custom;

import com.sas.backend.entity.CustomError;
import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
public abstract class BaseException extends Exception{
    Map<String, CustomError> errors;

    public BaseException(CustomError customError) {
        this.errors = new HashMap<String,CustomError>();
        this.errors.put("error",customError);
    }


}
