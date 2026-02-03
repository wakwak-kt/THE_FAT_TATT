package com.thefattatt.api.dto;

import com.thefattatt.api.entity.Booking;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingDto {
    private Long id;
    private String customerName;
    private String email;
    private String phone;
    private String date;
    private String time;
    private String service;
    private String status;
    private String notes;
    private String createdAt;

    public static BookingDto fromEntity(Booking booking) {
        return BookingDto.builder()
                .id(booking.getId())
                .customerName(booking.getCustomerName())
                .email(booking.getEmail())
                .phone(booking.getPhone())
                .date(booking.getDate().toString())
                .time(booking.getTime().toString())
                .service(booking.getService())
                .status(booking.getStatus().name().toLowerCase())
                .notes(booking.getNotes())
                .createdAt(booking.getCreatedAt().toString())
                .build();
    }
}
