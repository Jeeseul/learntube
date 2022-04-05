package com.example.demo.dto;

import java.sql.Date;

public class CourseInfoDTO {
	private int classId; 
	private String className;
	private int instructorId;
	private String instructorName;
	private String classDescription;
	private int openCode;
	private String tag;
	private int isActive;
	private Date regDate;
	
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public int getInstructorId() {
		return instructorId;
	}
	public void setInstructorId(int instructorId) {
		this.instructorId = instructorId;
	}
	public String getInstructorName() {
		return instructorName;
	}
	public void setInstructorName(String instructorName) {
		this.instructorName = instructorName;
	}
	public String getClassDescription() {
		return classDescription;
	}
	public void setClassDescription(String classDescription) {
		this.classDescription = classDescription;
	}
	public int getOpenCode() {
		return openCode;
	}
	public void setOpenCode(int openCode) {
		this.openCode = openCode;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	public int getIsActive() {
		return isActive;
	}
	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}
	
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	@Override
	public String toString() {
		return "CourseInfoDTO [classId=" + classId + ", className=" + className + ", instructorId=" + instructorId
				+ ", instructorName=" + instructorName + ", classDescription=" + classDescription + ", openCode="
				+ openCode + ", tag=" + tag + ", isActive=" + isActive + ", regDate=" + regDate + "]";
	}
	public int getClassId() {
		return classId;
	}
	public void setClassId(int classId) {
		this.classId = classId;
	}

}
