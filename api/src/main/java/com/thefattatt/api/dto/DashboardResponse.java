package com.thefattatt.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class DashboardResponse {
    private Stats stats;
    private List<ActivityDto> recentActivities;

    @Data
    @Builder
    @AllArgsConstructor
    public static class Stats {
        private long totalBookings;
        private long pendingBookings;
        private long totalAnnouncements;
        private long totalArtworks;
    }

    @Data
    @Builder
    @AllArgsConstructor
    public static class ActivityDto {
        private String description;
        private String timestamp;
    }
}
