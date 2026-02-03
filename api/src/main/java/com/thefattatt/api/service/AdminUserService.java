package com.thefattatt.api.service;

import com.thefattatt.api.dto.AdminUserDto;
import com.thefattatt.api.dto.AdminUserRequest;
import com.thefattatt.api.entity.AdminUser;
import com.thefattatt.api.repository.AdminUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminUserService {

    private final AdminUserRepository adminUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final ActivityService activityService;

    public List<AdminUserDto> getAllUsers() {
        return adminUserRepository.findAll().stream()
                .map(AdminUserDto::fromEntity)
                .collect(Collectors.toList());
    }

    public AdminUserDto getUserById(Long id) {
        AdminUser user = adminUserRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return AdminUserDto.fromEntity(user);
    }

    public AdminUserDto createUser(AdminUserRequest request) {
        if (adminUserRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        AdminUser user = AdminUser.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(AdminUser.Role.valueOf(request.getRole().toUpperCase()))
                .isActive(request.isActive())
                .build();

        AdminUser savedUser = adminUserRepository.save(user);
        activityService.logActivity("新しいユーザー「" + user.getName() + "」を追加しました", "USER_CREATE");

        return AdminUserDto.fromEntity(savedUser);
    }

    public AdminUserDto updateUser(Long id, AdminUserRequest request) {
        AdminUser user = adminUserRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setRole(AdminUser.Role.valueOf(request.getRole().toUpperCase()));
        user.setActive(request.isActive());

        if (request.getPassword() != null && !request.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
        }

        AdminUser savedUser = adminUserRepository.save(user);
        activityService.logActivity("ユーザー「" + user.getName() + "」を更新しました", "USER_UPDATE");

        return AdminUserDto.fromEntity(savedUser);
    }

    public void deleteUser(Long id) {
        AdminUser user = adminUserRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        activityService.logActivity("ユーザー「" + user.getName() + "」を削除しました", "USER_DELETE");
        adminUserRepository.deleteById(id);
    }
}
