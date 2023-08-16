package com.sas.backend.repository;

import com.sas.backend.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {

    @Query(value = "SELECT * FROM todos t WHERE LOWER(t.title) LIKE '%' + ?1 + '%'", nativeQuery = true)
    List<Todo> findByTitleContainingIgnoreCase(String searchTerm);
}
