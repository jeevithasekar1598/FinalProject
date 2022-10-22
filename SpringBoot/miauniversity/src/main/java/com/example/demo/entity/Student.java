 package com.example.demo.entity;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
@Entity
@Table(name="stu")
public class Student 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="sname")
    private String sname;
    @Column(name="gender")
    private String gender;
    @Column(name="address")
    private String address;
    @Column(name="email")
    private String email;
    @Column(name="mobileno")
    private String mobileno;
    @Column(name="admissiondate")
    private Date admissiondate;
    @Column(name="fees")
    private int fees;
    @Column(name="course_id")
    private Integer course_id;
    @Column(name="image_path")
    private String image_path;
    @ManyToOne(targetEntity=Course.class,fetch=FetchType.EAGER)
	@JoinColumn(name="course_id",insertable = false,updatable = false)
	private Course course;
    public Student()
    {
        
    }
     public Student(int id, String sname, String gender, String address, String email, String mobileno, Date admissiondate,
            Integer fees, Integer course_id, String image_path) 
     {
        super();
        this.id = id;
        this.sname = sname;
        this.gender = gender;
        this.address = address;
        this.email=email;
        this.mobileno = mobileno;
        this.admissiondate = admissiondate;
        this.fees=fees;
        this.course_id = course_id;
        this.image_path = image_path;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getgender() {
        return gender;
    }

    public void setJob(String gender) {
        this.gender = gender;
    }

    public String getaddress() {
        return address;
    }

    public void setaddress(String address) {
        this.address = address;
    }

    public String getemail() {
        return email;
    }

    public void setemail(String email) {
        this.email = email;
    }

    public String getmobileno() {
        return mobileno;
    }

    public void setmobileno(String mobileno) {
        this.mobileno = mobileno;
    }

    public Date getadmissiondate() {
        return admissiondate;
    }

    public void setadmissiondate(Date admissiondate) {
        this.admissiondate = admissiondate;
    }

    public int getFees() {
		return fees;
	}
	public void setFees(int fees) {
		this.fees = fees;
	}
	public Integer getcourse_id() {
        return course_id;
    }

    public void setcourse_id(Integer course_id) {
        this.course_id = course_id;
    }

    public String getImage_path() {
        return image_path;
    }

    public void setImage_path(String image_path) {
        this.image_path = image_path;
    }
    

}