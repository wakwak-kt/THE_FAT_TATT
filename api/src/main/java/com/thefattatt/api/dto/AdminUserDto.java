package com.thefattatt.api.dto;

import com.thefattatt.api.entity.AdminUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminUserDto {
    private Long id;
    private String name;
    private String email;
    private String role;
    private boolean isActive;
    private String lastLogin;
    private String createdAt;

    public static AdminUserDto fromEntity(AdminUser user) {
        return AdminUserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole().name().toLowerCase())
                .isActive(user.isActive())
                .lastLogin(user.getLastLogin() != null ? user.getLastLogin().toString() : null)
                .createdAt(user.getCreatedAt().toString())
                .build();
    }
}
