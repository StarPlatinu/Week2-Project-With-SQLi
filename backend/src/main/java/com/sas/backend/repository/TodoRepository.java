package com.sas.backend.repository;

import com.sas.backend.entity.Todo;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public interface TodoRepository extends JpaRepository<Todo, Long> {


    @Query(value = "SELECT * FROM todos t WHERE t.title = ?1", nativeQuery = true)
    public List<Todo> findByTitleContainingIgnoreCase(String searchTerm);



}
