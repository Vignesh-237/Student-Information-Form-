package edu.student.Details.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.student.Details.model.Student;

@CrossOrigin(origins= {"http://127.0.0.1:5500"})
@RestController
public class StudentController {
		
		@Autowired
		StudentRepository repo;
		
		
		@GetMapping("/fetchAll")
		public List<Student> getAllStudents() {
			return  repo.findAll();
		}
		
		@GetMapping("/students/{id}")
		public Student getStudentById(@PathVariable String id) {
			return repo.findById(id).get();
		}
		
		@PostMapping("/save")
		public void saveStudentDetails (@RequestBody Student s) {
			repo.save(s);
		}
}

