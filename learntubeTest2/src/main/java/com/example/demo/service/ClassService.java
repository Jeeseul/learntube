package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ClassDAOInterface;
import com.example.demo.dto.ClassDTO;
import com.example.demo.dto.CourseInfoDTO;

@Service
public class ClassService {
	
	@Autowired
	private ClassDAOInterface classDAOInterface;
	
    public List<ClassDTO> getAllCourse() {
        return classDAOInterface.getAllCourse();
    }
    
    public List<CourseInfoDTO> getAllCourseInfo() {
        return classDAOInterface.getAllCourseInfo();
    }

}
