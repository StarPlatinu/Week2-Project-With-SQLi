package com.sas.backend.service.impl;

import com.sas.backend.entity.User;
import com.sas.backend.model.user.dto.UserDTOLoginRequest;
import com.sas.backend.model.user.dto.UserDTOResponse;
import com.sas.backend.model.user.mapper.UserMapper;
import com.sas.backend.repository.UserRepository;
import com.sas.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public Map<String, UserDTOResponse> authenticate(Map<String, UserDTOLoginRequest> userDTOLoginRequestMap) {
        UserDTOLoginRequest  userDTOLoginRequest = userDTOLoginRequestMap.get("user");
        Optional<User> userOptional = userRepository.findByEmail(userDTOLoginRequest.getEmail());
        boolean isAuthen = false;
        if(userOptional.isPresent()){
            User user = userOptional.get();
            if(user.getPassword().equals((userDTOLoginRequest.getPassword()))){
                isAuthen = true;
            }
        }
        if(!isAuthen){
            System.out.println("User name and password incorrect");
        }
        Map<String,UserDTOResponse> wrapper = new HashMap<>();
        if (userOptional.isPresent()) {
            UserDTOResponse userDTOResponse = UserMapper.toUserDTOrespponse(userOptional.get());
            wrapper.put("user",userDTOResponse);
        }

        return wrapper;
    }
}
