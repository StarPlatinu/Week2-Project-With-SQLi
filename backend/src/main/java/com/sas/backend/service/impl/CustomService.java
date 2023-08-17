package com.sas.backend.service.impl;

import com.sas.backend.dto.TodoDto;
import com.sas.backend.service.CustomerService;
import com.sas.backend.service.TodoService;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zaxxer.hikari.HikariDataSource;

@Service

public class CustomService implements CustomerService {

    private final HikariDataSource dataSource;

    @Autowired
    public CustomService(HikariDataSource dataSource) {
        this.dataSource = dataSource;
    }
    @Override
    public List<TodoDto> searchTodos(String searchTerm) throws SQLException {
        try (Connection connection = dataSource.getConnection()) {
            String sql = "SELECT * FROM todos t WHERE t.title = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1, searchTerm);
            ResultSet resultSet = preparedStatement.executeQuery();

            List<TodoDto> todos = new ArrayList<>();
            while (resultSet.next()) {
                TodoDto todoDto = new TodoDto();
                // Populate todoDto from resultSet
                todos.add(todoDto);
            }

            return todos;
        }
    }
}
