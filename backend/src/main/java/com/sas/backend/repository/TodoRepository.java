package com.sas.backend.repository;

import com.sas.backend.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {

    List<Todo> findByTitleContainingIgnoreCase(String searchTerm);
}
