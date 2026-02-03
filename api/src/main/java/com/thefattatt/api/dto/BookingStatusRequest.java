package com.thefattatt.api.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BookingStatusRequest {
    @NotBlank
    private String status;
}
