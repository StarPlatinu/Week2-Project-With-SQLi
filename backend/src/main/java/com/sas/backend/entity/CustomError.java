package com.sas.backend.entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Builder
@Data
@Getter
@Setter
public class CustomError {
    private  String code;
    private String message;
}
