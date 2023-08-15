package com.sas.backend.model.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTOResponse {
 private String email;
 private String token;
 private String username;
 private String bio;
 private String image;
}
