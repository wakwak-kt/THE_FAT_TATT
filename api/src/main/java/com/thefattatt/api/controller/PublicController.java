package com.thefattatt.api.controller;

import com.thefattatt.api.dto.AnnouncementDto;
import com.thefattatt.api.dto.ArtworkDto;
import com.thefattatt.api.entity.Booking;
import com.thefattatt.api.repository.BookingRepository;
import com.thefattatt.api.service.ActivityService;
import com.thefattatt.api.service.AnnouncementService;
import com.thefattatt.api.service.ArtworkService;
import jakarta.validation.Valid;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/api/public")
@RequiredArgsConstructor
public class PublicController {

    private final AnnouncementService announcementService;
    private final ArtworkService artworkService;
    private final BookingRepository bookingRepository;
    private final ActivityService activityService;

    @GetMapping("/announcements")
    public ResponseEntity<List<AnnouncementDto>> getPublishedAnnouncements() {
        return ResponseEntity.ok(announcementService.getPublishedAnnouncements());
    }

    @GetMapping("/artworks")
    public ResponseEntity<List<ArtworkDto>> getAvailableArtworks() {
        return ResponseEntity.ok(artworkService.getAvailableArtworks());
    }

    @PostMapping("/bookings")
    public ResponseEntity<String> createBooking(@Valid @RequestBody BookingRequest request) {
        Booking booking = Booking.builder()
                .customerName(request.getCustomerName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .date(LocalDate.parse(request.getDate()))
                .time(LocalTime.parse(request.getTime()))
                .service(request.getService())
                .notes(request.getNotes())
                .status(Booking.Status.PENDING)
                .build();

        bookingRepository.save(booking);
        activityService.logActivity(
                "新規予約: " + booking.getCustomerName() + "様 (" + booking.getDate() + ")",
                "BOOKING_CREATE"
        );

        return ResponseEntity.ok("Booking created successfully");
    }

    @Data
    public static class BookingRequest {
        private String customerName;
        private String email;
        private String phone;
        private String date;
        private String time;
        private String service;
        private String notes;
    }
}
