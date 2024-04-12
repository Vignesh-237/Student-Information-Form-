package edu.student.Details.model;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Student {

	@Column(nullable = false)
	private String name;
	private long mobile_no;
	@Column(nullable = false)
	private String dob;
	private int age;
	@Column(nullable = false)
	private String address;
	@Column(nullable = false)
	private String district;
	@Column(nullable = false)
	private String taluk;
	@Column(nullable = false)
	private String village;
	private int s1_english;
	private int s2_mathematics;
	private int s3_physics;
	private int s4_chemistry;
	private int s5_computer_science;
	private int total_marks;
	private double average_mark;

	@Id
	private String acknowledgement_number;


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getTaluk() {
		return taluk;
	}

	public void setTaluk(String taluk) {
		this.taluk = taluk;
	}

	public String getVillage() {
		return village;
	}

	public void setVillage(String village) {
		this.village = village;
	}

	public int getS1_english() {
		return s1_english;
	}

	public void setS1_english(int s1_english) {
		this.s1_english = s1_english;
	}

	public int getS2_mathematics() {
		return s2_mathematics;
	}

	public void setS2_mathematics(int s2_mathematics) {
		this.s2_mathematics = s2_mathematics;
	}

	public int getS3_physics() {
		return s3_physics;
	}

	public void setS3_physics(int s3_physics) {
		this.s3_physics = s3_physics;
	}

	public int getS4_chemistry() {
		return s4_chemistry;
	}

	public void setS4_chemistry(int s4_chemistry) {
		this.s4_chemistry = s4_chemistry;
	}

	public int getS5_computer_science() {
		return s5_computer_science;
	}

	public void setS5_computer_science(int s5_computer_science) {
		this.s5_computer_science = s5_computer_science;
	}

	public int getTotal_marks() {
		return total_marks;
	}

	public void setTotal_marks(int total_marks) {
		this.total_marks = total_marks;
	}

	public double getAverage_mark() {
		return average_mark;
	}

	public void setAverage_mark(double average_mark) {
		this.average_mark = average_mark;
	}

	public long getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(long mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getAcknowledgement_number() {
		return acknowledgement_number;
	}

	public void setAcknowledgement_number(String acknowledgement_number) {
		this.acknowledgement_number = acknowledgement_number;
	}
	
	

}
