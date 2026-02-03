package com.thefattatt.api.service;

import com.thefattatt.api.dto.DashboardResponse;
import com.thefattatt.api.entity.Activity;
import com.thefattatt.api.repository.ActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ActivityService {

    private final ActivityRepository activityRepository;
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm");

    public void logActivity(String description, String type) {
        Activity activity = Activity.builder()
                .description(description)
                .type(type)
                .build();
        activityRepository.save(activity);
    }

    public List<DashboardResponse.ActivityDto> getRecentActivities() {
        return activityRepository.findTop10ByOrderByTimestampDesc().stream()
                .map(activity -> DashboardResponse.ActivityDto.builder()
                        .description(activity.getDescription())
                        .timestamp(activity.getTimestamp().format(FORMATTER))
                        .build())
                .collect(Collectors.toList());
    }
}
