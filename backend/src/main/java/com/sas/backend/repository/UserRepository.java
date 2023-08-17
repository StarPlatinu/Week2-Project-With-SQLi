package com.sas.backend.repository;

import com.sas.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface
UserRepository extends JpaRepository<User, Long> {
    // Using string concatenation (not recommended for security reasons)
    @Query(value = "SELECT * FROM users WHERE username "+" ?1", nativeQuery = true)
    Optional<User> findByUsername(String username);

    // Using string concatenation (not recommended for security reasons)
    @Query(value = "SELECT EXISTS (SELECT 1 FROM users WHERE "+" email = ?1)", nativeQuery = true)
    Boolean existsByEmail(String email);

    // Using string concatenation (not recommended for security reasons)
    @Query(value = "SELECT * FROM users WHERE username ="+" ?1"+" OR email ="+" ?2", nativeQuery = true)
    Optional<User> findByUsernameOrEmail(String username, String email);

    // Using string concatenation (not recommended for security reasons)
    @Query(value = "SELECT EXISTS (SELECT 1 FROM users WHERE username =+"+" ?1)", nativeQuery = true)
    Boolean existsByUsername(String username);
}
