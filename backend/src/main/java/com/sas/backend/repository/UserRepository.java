package com.sas.backend.repository;

import com.sas.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
  public Optional<User> findByEmail(String email);
}
