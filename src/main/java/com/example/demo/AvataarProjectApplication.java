package com.example.demo;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.entities.Asset;
import com.example.entities.LoginUser;
import com.example.repositories.AssetRepository;
import com.example.repositories.LoginUserRepository;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.controllers")
@EnableJpaRepositories(basePackages = "com.example.repositories")
@EntityScan(basePackages = "com.example.entities")
public class AvataarProjectApplication implements CommandLineRunner {

	@Autowired
	private AssetRepository assetRepository;
	@Autowired
	private LoginUserRepository loginUserRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AvataarProjectApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		// TODO Auto-generated method stub
        assetRepository.save(new Asset("car","marutibaleno","available","ravi",new Date(),"ravi2", new Date(),false));
		assetRepository.save(new Asset("mobile","appleiphone","available","ravi",new Date(),"ravi2", new Date(),false));
		assetRepository.save(new Asset("bike","bajajpulsar","available","ravi",new Date(),"ravi2", new Date(),false));
		loginUserRepository.save(new LoginUser("testuser1@avataar.com","password1"));
		loginUserRepository.save(new LoginUser("testuser2@avataar.com","password2"));
		loginUserRepository.save(new LoginUser("testuser3@avataar.com","password3"));
	}
}
