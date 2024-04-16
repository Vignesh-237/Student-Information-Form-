//package edu.student.Details.controller;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import edu.student.Details.model.Student;
//import edu.student.Details.model.StudentCompositeKey;
//
//public interface StudentRepository extends  JpaRepository<Student, StudentCompositeKey> {
//
//}

package edu.student.Details.controller;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import edu.student.Details.model.Student;
import edu.student.Details.model.StudentCompositeKey;

public interface StudentRepository extends JpaRepository<Student, StudentCompositeKey> {
    
	@Query("SELECT s FROM Student s WHERE s.id.mobile_no = :mobile_no OR s.id.acknowledgement_number = :acknowledgement_number")
    Optional<Student> findByIdentifier(@Param("mobile_no") String mobile_no, @Param("acknowledgement_number") String acknowledgement_number);
}

