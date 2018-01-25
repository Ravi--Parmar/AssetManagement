package com.example.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class LoginUser {
 @Id
 private String emailId;
 private String password;
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public LoginUser(String emailId, String password) {

	this.emailId = emailId;
	this.password = password;
}
public LoginUser() {
}
 
}
