package com.sas.backend.service;

import com.sas.backend.dto.LoginDto;
import com.sas.backend.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
