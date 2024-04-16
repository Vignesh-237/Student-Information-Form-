package edu.student.Details.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class StudentCompositeKey {
	@Column(nullable = false)
    private String mobile_no; 

    @Column(nullable = false)
    private String acknowledgement_number;
    
    public StudentCompositeKey() {}

	public StudentCompositeKey(String mobile_no, String acknowledgement_number) {
		super();
		this.mobile_no = mobile_no;
		this.acknowledgement_number = acknowledgement_number;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getAcknowledgement_number() {
		return acknowledgement_number;
	}

	public void setAcknowledgement_number(String acknowledgement_number) {
		this.acknowledgement_number = acknowledgement_number;
	}
    
    
}
