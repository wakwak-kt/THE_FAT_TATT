package com.thefattatt.api.service;

import com.thefattatt.api.dto.LoginRequest;
import com.thefattatt.api.dto.LoginResponse;
import com.thefattatt.api.entity.AdminUser;
import com.thefattatt.api.repository.AdminUserRepository;
import com.thefattatt.api.security.AdminUserDetails;
import com.thefattatt.api.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AdminUserRepository adminUserRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public LoginResponse login(LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid email or password");
        }

        AdminUser user = adminUserRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.isActive()) {
            throw new RuntimeException("Account is disabled");
        }

        user.setLastLogin(LocalDateTime.now());
        adminUserRepository.save(user);

        AdminUserDetails userDetails = new AdminUserDetails(user);
        String token = jwtService.generateToken(userDetails);

        return LoginResponse.builder()
                .token(token)
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole().name())
                .build();
    }
}
