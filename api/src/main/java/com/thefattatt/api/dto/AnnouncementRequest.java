package com.thefattatt.api.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AnnouncementRequest {
    @NotBlank
    private String title;

    @NotBlank
    private String content;

    @NotBlank
    private String publishDate;

    private boolean isPublished;
}
