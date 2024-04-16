//package edu.student.Details.service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import edu.student.Details.dao.StudentDao;
//import edu.student.Details.model.Student;
//import edu.student.Details.repository.StudentRepository;
//
//@Service
//public class StudentService {
//	
//	@Autowired
//	StudentDao sdao;
//	
//	public Student saveUser(Student s) {
//		return sdao.saveUser(s);
//	}
//	
//	public Student fetchById(String id) {
//		return sdao.fetchById(id);
//	}
//	
//	public List<Student> fetchAll() {
//		return sdao.fetchAll();
//	}
//
//	
//	
////	public Student getStudentByMob(Long u) {
////	    return repo.findById(studentId1).get();
////	}
////
////	public Optional<Student> getStudentByAck(String studentId2) {
////	    return repo.findById(studentId2); // Assuming you have a custom method in the repository
////	}
//	
//}
//
//
//
