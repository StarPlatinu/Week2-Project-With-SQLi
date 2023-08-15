package com.sas.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "user_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(unique = true)
    private String email;
    private String password;
    @Column(unique = true)
    private String username;
    private String bio;
    private String image;
}
