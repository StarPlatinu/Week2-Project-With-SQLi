package com.sas.backend.exception.custom;

import com.sas.backend.entity.CustomError;

public class BadRequestException extends  BaseException{
    public BadRequestException(CustomError customError) {
        super(customError);
    }
}
