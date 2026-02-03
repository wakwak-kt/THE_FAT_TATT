package com.thefattatt.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AdminUserRequest {
    @NotBlank
    private String name;

    @Email
    @NotBlank
    private String email;

    private String password;

    @NotBlank
    private String role;

    private boolean isActive;
}
