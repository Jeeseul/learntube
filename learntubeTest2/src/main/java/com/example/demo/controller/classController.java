package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class classController {
	
	@GetMapping("/course")
	public String getAllCourse() {
		return "Hello World!";
	}
}
