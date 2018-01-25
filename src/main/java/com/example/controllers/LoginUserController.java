package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.LoginUser;
import com.example.repositories.LoginUserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class LoginUserController {
	@Autowired
	private LoginUserRepository loginUserRepository;
	
	@GetMapping("/loginusers")
	public List<LoginUser> getLoginUsers(){
		return loginUserRepository.findAll();		
	}
}	

