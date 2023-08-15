package com.sas.backend.util;

import com.sas.backend.entity.User;
import com.sas.backend.model.TokenPayload;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class JwtTokenUtil {
    //JWT: Header + Payload + Signature
 private String secret = "Thanh_VP";
 public String generateToken(User user,Long expireDate){
     Map<String,Object> claims = new HashMap<>();
     TokenPayload tokenPayload = TokenPayload.builder().userId(user.getId()).email(user.getEmail()).build();
     claims.put("payload",tokenPayload);
     return  Jwts.builder().setClaims(claims)
             .setIssuedAt(new Date(System.currentTimeMillis()))
             .setExpiration(new Date(System.currentTimeMillis()+expireDate*1000))
             .signWith(SignatureAlgorithm.ES512,secret).compact();
 }
}
