package com.sas.backend.exception.custom;

import com.sas.backend.entity.CustomError;

public class NotFoundException extends BaseException{
public  NotFoundException(CustomError customError){
    super(customError);
}
}
