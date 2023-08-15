package com.sas.backend.service;

import com.sas.backend.model.user.dto.UserDTOLoginRequest;
import com.sas.backend.model.user.dto.UserDTOResponse;

import java.util.Map;

public interface UserService {
   public Map<String, UserDTOResponse> authenticate(Map<String, UserDTOLoginRequest> userDTOLoginRequestMap);
}
