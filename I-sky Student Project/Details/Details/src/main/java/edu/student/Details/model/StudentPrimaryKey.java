//package edu.student.Details.model;
//
//import java.io.Serializable;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Embeddable;
//
//@Embeddable
//public class StudentPrimaryKey implements Serializable {
//
//	@Column(name = "mobile_no", unique = true, nullable = false)
//	private long mobile_no;
//	@Column(name = "acknowledgement_number", unique = true, nullable = false)
//	private String acknowledgement_number;
//
//	public long getMobile_no() {
//		return mobile_no;
//	}
//
//	public void setMobile_no(long mobile_no) {
//		this.mobile_no = mobile_no;
//	}
//
//	public String getAcknowledgement_number() {
//		return acknowledgement_number;
//	}
//
//	public void setAcknowledgement_number(String acknowledgement_number) {
//		this.acknowledgement_number = acknowledgement_number;
//	}
//
//}