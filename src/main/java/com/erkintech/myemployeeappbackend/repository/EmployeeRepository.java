package com.erkintech.myemployeeappbackend.repository;

import com.erkintech.myemployeeappbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository  extends JpaRepository<Employee,Long> {
}
