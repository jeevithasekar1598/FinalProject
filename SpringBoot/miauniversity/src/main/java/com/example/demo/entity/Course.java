package com.example.demo.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="course")
public class Course 
{
	@Column(name="id")
	@Id
	private int id;
	@Column(name="cname")
	private String cname;
	@Column(name="duration")
	private String duration;
	public Course()
	{
		
	}
	@OneToMany(mappedBy="course")
	private Set<Student>student;
	public Course(int id, String cname, String duration) {
		super();
		this.id = id;
		this.cname = cname;
		this.duration = duration;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	

}
