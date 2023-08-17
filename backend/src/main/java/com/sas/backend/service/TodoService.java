package com.sas.backend.service;

import com.sas.backend.dto.TodoDto;
import com.sas.backend.exception.custom.NotFoundException;

import java.sql.SQLException;
import java.util.List;

public interface TodoService {

    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(Long id) throws NotFoundException;

    List<TodoDto> getAllTodos();

    TodoDto updateTodo(TodoDto todoDto, Long id);

    void deleteTodo(Long id) throws NotFoundException;

    TodoDto completeTodo(Long id);

    TodoDto inCompleteTodo(Long id);

    List<TodoDto> searchTodos(String searchTerm) throws SQLException;
}
