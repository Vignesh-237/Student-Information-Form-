package edu.student.Details.controller;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.student.Details.model.Student;

public interface StudentRepository extends  JpaRepository<Student, String> {

}