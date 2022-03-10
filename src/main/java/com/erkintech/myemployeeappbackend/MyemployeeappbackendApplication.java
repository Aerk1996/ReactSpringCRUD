package com.erkintech.myemployeeappbackend;

import com.erkintech.myemployeeappbackend.model.Employee;
import com.erkintech.myemployeeappbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyemployeeappbackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(MyemployeeappbackendApplication.class, args);
	}


	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
	/*	Employee employee = new Employee();
		employee.setFirstName("Erkin");
		employee.setLastName("Sahsuvaroglu");
		employee.setEmailId("erkinbaba@gmail.com");
		employeeRepository.save(employee);


		Employee employee1 = new Employee();
		employee1.setFirstName("Bartu");
		employee1.setLastName("Celebi");
		employee1.setEmailId("barbartu@gmail.com");
		employeeRepository.save(employee1);
	*/}
}
