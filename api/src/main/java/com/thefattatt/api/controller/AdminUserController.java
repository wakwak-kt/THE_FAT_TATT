package com.thefattatt.api.controller;

import com.thefattatt.api.dto.AdminUserDto;
import com.thefattatt.api.dto.AdminUserRequest;
import com.thefattatt.api.service.AdminUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/users")
@RequiredArgsConstructor
public class AdminUserController {

    private final AdminUserService adminUserService;

    @GetMapping
    public ResponseEntity<List<AdminUserDto>> getAllUsers() {
        return ResponseEntity.ok(adminUserService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminUserDto> getUserById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(adminUserService.getUserById(id));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<AdminUserDto> createUser(@Valid @RequestBody AdminUserRequest request) {
        try {
            return ResponseEntity.ok(adminUserService.createUser(request));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<AdminUserDto> updateUser(@PathVariable Long id, @Valid @RequestBody AdminUserRequest request) {
        try {
            return ResponseEntity.ok(adminUserService.updateUser(id, request));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        try {
            adminUserService.deleteUser(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
