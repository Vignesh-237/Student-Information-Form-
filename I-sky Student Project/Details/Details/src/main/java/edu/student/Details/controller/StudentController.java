package edu.student.Details.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.student.Details.model.Student;
import edu.student.Details.model.StudentCompositeKey;

@CrossOrigin(origins = { "http://127.0.0.1:5500" })
@RestController
public class StudentController {

	@Autowired
	StudentRepository repo;

	@GetMapping("/fetchAll")
	public List<Student> getAllStudents() {
		return repo.findAll();
	}

//	@GetMapping("/students/{id}")
//	public Student getStudentById(@PathVariable String id) {
//		return repo.findById(id).get();
//	}

	@GetMapping("/students/{id}")
	public ResponseEntity<Student> getStudentByIdentifier(@PathVariable String id) {
		try {
			Optional<Student> studentOptional;
			if (id.matches("\\d{10}")) { // mobile numbers are 10 digits long
				studentOptional = repo.findByIdentifier(id, null);
			} else {
				studentOptional = repo.findByIdentifier(null, id);
			}

			if (studentOptional.isPresent()) {
				return ResponseEntity.ok(studentOptional.get());
			} else {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

//		@GetMapping("/students/{id}")
//		public Student getStudentById(@PathVariable String id) {
//			return repo.findById(id).get();
//		}

	@PostMapping("/save")
	public ResponseEntity<String> saveStudentDetails(@RequestBody Student student) {
		try {
			String mobile_no = student.getId().getMobile_no();
			String acknowledgement_number = student.getId().getAcknowledgement_number();

			// Set calues for the composite key
			StudentCompositeKey id = new StudentCompositeKey(mobile_no, acknowledgement_number);
			student.setId(id);

			repo.save(student);

			return ResponseEntity.ok("Student details saved successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error saving student details: " + e.getMessage());
		}
	}

}
