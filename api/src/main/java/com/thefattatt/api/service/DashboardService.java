package com.thefattatt.api.service;

import com.thefattatt.api.dto.DashboardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final BookingService bookingService;
    private final AnnouncementService announcementService;
    private final ArtworkService artworkService;
    private final ActivityService activityService;

    public DashboardResponse getDashboardData() {
        DashboardResponse.Stats stats = DashboardResponse.Stats.builder()
                .totalBookings(bookingService.getTotalBookings())
                .pendingBookings(bookingService.getPendingBookings())
                .totalAnnouncements(announcementService.getTotalAnnouncements())
                .totalArtworks(artworkService.getTotalArtworks())
                .build();

        return DashboardResponse.builder()
                .stats(stats)
                .recentActivities(activityService.getRecentActivities())
                .build();
    }
}
