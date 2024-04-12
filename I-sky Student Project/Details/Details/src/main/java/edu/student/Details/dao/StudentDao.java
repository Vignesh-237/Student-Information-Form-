//package edu.student.Details.dao;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//import edu.student.Details.model.Student;
//import edu.student.Details.repository.StudentRepository;
//
//public class StudentDao {
//
//	@Autowired 
//	StudentRepository repo; // it will inject the object based on the type.
//
//	public Student saveUser(Student s) {
//		return repo.save(s);
//	}
//
//	public Student fetchById(String id) {
//
//		Optional<Student> o = repo.findById(id);
//
//		if (o.isPresent()) {
//			return o.get();
//		}
//
//		return null;
//	}
//// optional is a in-built class which contains one of two methods are
//// isPresent() and isEmpty() return type is boolean.
//
//	public List<Student> fetchAll() {
//
//		return repo.findAll();
//
//	}
//
//}
