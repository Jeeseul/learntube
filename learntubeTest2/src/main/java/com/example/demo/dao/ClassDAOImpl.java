//package com.example.demo.dao;
//
//import java.util.List;
//import java.util.concurrent.ExecutionException;
//
//import org.apache.ibatis.annotations.Mapper;
//import org.apache.ibatis.session.SqlSession;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//
//import com.example.demo.dto.ClassDTO;
//
//@Mapper
//public class ClassDAOImpl implements ClassDAOInterface{
//	
////	@Autowired
////    private SqlSession sqlSession;
//
//	@Override
//	public List<ClassDTO> getAllCourse() {
//        
//		return sqlSession.selectList("classMapper.getAllCourse");
//    }
//
//}
////@Repository