package com.sas.backend.service;

import com.sas.backend.dto.TodoDto;

import java.sql.SQLException;
import java.util.List;

public interface CustomerService {
    List<TodoDto> searchTodos(String searchTerm) throws SQLException;
}
