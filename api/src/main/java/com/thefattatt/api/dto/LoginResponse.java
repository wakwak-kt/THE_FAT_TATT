package com.thefattatt.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class LoginResponse {
    private String token;
    private String name;
    private String email;
    private String role;
}
