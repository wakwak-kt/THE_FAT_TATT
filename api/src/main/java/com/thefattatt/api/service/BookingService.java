package com.thefattatt.api.service;

import com.thefattatt.api.dto.BookingDto;
import com.thefattatt.api.entity.Booking;
import com.thefattatt.api.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final ActivityService activityService;

    public List<BookingDto> getAllBookings() {
        return bookingRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(BookingDto::fromEntity)
                .collect(Collectors.toList());
    }

    public BookingDto getBookingById(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        return BookingDto.fromEntity(booking);
    }

    public BookingDto updateBookingStatus(Long id, String status) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setStatus(Booking.Status.valueOf(status.toUpperCase()));
        Booking savedBooking = bookingRepository.save(booking);

        String statusLabel = getStatusLabel(status);
        activityService.logActivity(
                booking.getCustomerName() + "様の予約ステータスを「" + statusLabel + "」に変更しました",
                "BOOKING_STATUS_UPDATE"
        );

        return BookingDto.fromEntity(savedBooking);
    }

    public long getTotalBookings() {
        return bookingRepository.count();
    }

    public long getPendingBookings() {
        return bookingRepository.countByStatus(Booking.Status.PENDING);
    }

    private String getStatusLabel(String status) {
        return switch (status.toLowerCase()) {
            case "pending" -> "保留中";
            case "confirmed" -> "確認済み";
            case "completed" -> "完了";
            case "cancelled" -> "キャンセル";
            default -> status;
        };
    }
}
