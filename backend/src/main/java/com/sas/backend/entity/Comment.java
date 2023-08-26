package com.sas.backend.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User createdBy;
    private ZonedDateTime createdDate;
    @Column(columnDefinition = "TEXT")
    private String text;

}
