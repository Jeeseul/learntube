package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


import com.example.demo.dto.ClassDTO;
import com.example.demo.dto.CourseInfoDTO;
import com.example.demo.service.ClassService;


@RestController
@RequestMapping("/")
public class classController {
	
	@Autowired
	private ClassService classService;
	
	@RequestMapping(value = "api/courses", method = RequestMethod.GET)
	public List<CourseInfoDTO> getAllCourse() {
		ModelAndView mv = new ModelAndView();
		
		List<CourseInfoDTO> courseList = classService.getAllCourseInfo();
		for(CourseInfoDTO c : courseList) {
			c.toString();	
		}
		mv.addObject("courseList",courseList );
		mv.setViewName("course");
		
		return courseList;
	}
}
