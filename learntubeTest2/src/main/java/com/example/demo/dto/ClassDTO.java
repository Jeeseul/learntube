package com.example.demo.dto;

import java.sql.Date;

public class ClassDTO {
	
	private int id;
	private String className;
	private int instructorId;
	private String classDescription;
	private int openCode;
	private String tag;
	private int isActive;
	private String entryCode;
	private Date closeDate;
	private Date regDate;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
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
	public String getEntryCode() {
		return entryCode;
	}
	public void setEntryCode(String entryCode) {
		this.entryCode = entryCode;
	}
	public Date getCloseDate() {
		return closeDate;
	}
	public void setCloseDate(Date closeDate) {
		this.closeDate = closeDate;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	@Override
	public String toString() {
		return "ClassDTO [id=" + id + ", className=" + className + ", instructorId=" + instructorId
				+ ", classDescription=" + classDescription + ", openCode=" + openCode + ", tag=" + tag + ", isActive="
				+ isActive + ", entryCode=" + entryCode + ", closeDate=" + closeDate + ", regDate=" + regDate + "]";
	}

}
