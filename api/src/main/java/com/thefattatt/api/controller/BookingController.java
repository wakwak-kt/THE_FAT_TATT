package com.thefattatt.api.controller;

import com.thefattatt.api.dto.BookingDto;
import com.thefattatt.api.dto.BookingStatusRequest;
import com.thefattatt.api.service.BookingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @GetMapping
    public ResponseEntity<List<BookingDto>> getAllBookings() {
        return ResponseEntity.ok(bookingService.getAllBookings());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookingDto> getBookingById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(bookingService.getBookingById(id));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<BookingDto> updateBookingStatus(
            @PathVariable Long id,
            @Valid @RequestBody BookingStatusRequest request
    ) {
        try {
            return ResponseEntity.ok(bookingService.updateBookingStatus(id, request.getStatus()));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
