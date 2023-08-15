package com.sas.backend.controller;

import com.sas.backend.model.user.dto.UserDTOLoginRequest;
import com.sas.backend.model.user.dto.UserDTOResponse;
import com.sas.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@RestController
@RequestMapping("/api")
@CrossOrigin
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
@PostMapping("/users/login")
    public Map<String, UserDTOResponse> login(@RequestBody Map<String, UserDTOLoginRequest> userDTOLoginRequestMap){
     return  userService.authenticate(userDTOLoginRequestMap);
    }

}
