package com.thefattatt.api.dto;

import com.thefattatt.api.entity.Announcement;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnnouncementDto {
    private Long id;
    private String title;
    private String content;
    private String publishDate;
    private boolean isPublished;
    private String createdAt;

    public static AnnouncementDto fromEntity(Announcement announcement) {
        return AnnouncementDto.builder()
                .id(announcement.getId())
                .title(announcement.getTitle())
                .content(announcement.getContent())
                .publishDate(announcement.getPublishDate().toString())
                .isPublished(announcement.isPublished())
                .createdAt(announcement.getCreatedAt().toString())
                .build();
    }
}
