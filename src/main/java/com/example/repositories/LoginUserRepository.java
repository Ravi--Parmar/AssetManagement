package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.LoginUser;;

public interface LoginUserRepository extends JpaRepository<LoginUser, String> {

}
