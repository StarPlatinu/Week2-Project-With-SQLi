package com.sas.backend.model.user.mapper;

import com.sas.backend.entity.User;
import com.sas.backend.model.user.dto.UserDTOResponse;

public class UserMapper {
     public static UserDTOResponse  toUserDTOrespponse(User user){
         return UserDTOResponse.builder().email(user.getEmail()).username(user.getUsername()).bio(user.getBio()).image(user.getImage()).build();
     }
}
