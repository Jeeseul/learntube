package com.example.demo.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.ClassDTO;
import com.example.demo.dto.CourseInfoDTO;

@Mapper
public interface ClassDAOInterface  {
	
	public List<ClassDTO> getAllCourse();
	public List<CourseInfoDTO> getAllCourseInfo();

}
