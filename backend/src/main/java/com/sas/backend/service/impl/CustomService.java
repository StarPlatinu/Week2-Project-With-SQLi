package com.sas.backend.service.impl;

import com.sas.backend.dto.TodoDto;
import com.sas.backend.service.CustomerService;
import com.sas.backend.service.TodoService;

import java.sql.*;
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
        List<TodoDto> todos = new ArrayList<>();
        String sql = "SELECT title,description,completed FROM todos t WHERE t.title = '" + searchTerm + "'";
        try (Connection connection = dataSource.getConnection()) {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sql);
            while (resultSet.next()) {
                TodoDto todoDto = new TodoDto();
                todoDto.setTitle(resultSet.getString("title"));
                todoDto.setDescription(resultSet.getString("description"));
                todoDto.setCompleted(resultSet.getBoolean("completed"));
                todos.add(todoDto);
            }

        } catch (SQLException e) {
            // Handle the SQL syntax error here
            throw new SQLException(" String sql = \"select \"\n" +
                    "      + \"first_name,last_name,username \"\n" +
                    "      + \"from users where userid = '\"\n" +
                    "      + userId \n" +
                    "      + \"'\";\n" +
                    sql +
                    "    Connection c = dataSource.getConnection();\n" +
                    "    ResultSet rs = c.createStatement().executeQuery(sql);.", e);
        }
       return todos;
    }

}
