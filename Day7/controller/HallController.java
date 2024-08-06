package com.example.demo.controller;

import com.example.demo.model.Hall;
import com.example.demo.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/halls")
public class HallController {

    @Autowired
    private HallService hallService;

    @PostMapping
    public Hall createHall(@RequestBody Hall hall) {
        return hallService.createHall(hall);
    }

    @GetMapping
    public List<Hall> getAllHalls() {
        return hallService.getAllHalls();
    }

    @GetMapping("/{id}")
    public Optional<Hall> getHallById(@PathVariable Long id) {
        return hallService.getHallById(id);
    }

    @PutMapping("/{id}")
    public Hall updateHall(@PathVariable Long id, @RequestBody Hall hallDetails) {
        return hallService.updateHall(id, hallDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteHall(@PathVariable Long id) {
        hallService.deleteHall(id);
    }
}