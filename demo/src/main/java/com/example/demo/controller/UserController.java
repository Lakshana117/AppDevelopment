package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.model.Student;
import com.example.demo.model.Faculty;
import com.example.demo.service.UserService;
import com.example.demo.service.StudentService;
import com.example.demo.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private StudentService studentService;

    @Autowired
    private FacultyService facultyService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        if ("student".equals(user.getRole())) {
            Student student = new Student();
            student.setUser(registeredUser);
            student.setName(user.getName());
            student.setEmail(user.getEmail());
            student.setPassword(user.getPassword());
            student.setPhoneNumber(user.getPhoneNumber());
            student.setRegisterNumber(user.getRegisterNumber());
            student.setCourse(user.getCourse());
            student.setYear(user.getYear());
            studentService.registerStudent(student);
        } else if ("faculty".equals(user.getRole())) {
            Faculty faculty = new Faculty();
            faculty.setUser(registeredUser);
            faculty.setName(user.getName());
            faculty.setEmail(user.getEmail());
            faculty.setPassword(user.getPassword());
            faculty.setPhoneNumber(user.getPhoneNumber());
            faculty.setDepartment(user.getDepartment());
            faculty.setQualification(user.getQualification());
            faculty.setExperience(user.getExperience());
            facultyService.registerFaculty(faculty);
        }
        return registeredUser;
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return existingUser;
        }
        return null;  // Or throw an appropriate exception
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User user = userService.findById(id);
        if (user != null) {
            user.setName(userDetails.getName());
            user.setDateOfBirth(userDetails.getDateOfBirth());
            user.setGender(userDetails.getGender());
            user.setEmail(userDetails.getEmail());
            user.setPassword(userDetails.getPassword());
            user.setRole(userDetails.getRole());
            return userService.saveUser(user);
        }
        return null;  // Or throw an appropriate exception
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "User deleted successfully";
    }
}
