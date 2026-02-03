package com.thefattatt.api.service;

import com.thefattatt.api.dto.AnnouncementDto;
import com.thefattatt.api.dto.AnnouncementRequest;
import com.thefattatt.api.entity.Announcement;
import com.thefattatt.api.repository.AnnouncementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnnouncementService {

    private final AnnouncementRepository announcementRepository;
    private final ActivityService activityService;

    public List<AnnouncementDto> getAllAnnouncements() {
        return announcementRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(AnnouncementDto::fromEntity)
                .collect(Collectors.toList());
    }

    public List<AnnouncementDto> getPublishedAnnouncements() {
        return announcementRepository.findByIsPublishedTrueOrderByPublishDateDesc().stream()
                .map(AnnouncementDto::fromEntity)
                .collect(Collectors.toList());
    }

    public AnnouncementDto getAnnouncementById(Long id) {
        Announcement announcement = announcementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Announcement not found"));
        return AnnouncementDto.fromEntity(announcement);
    }

    public AnnouncementDto createAnnouncement(AnnouncementRequest request) {
        Announcement announcement = Announcement.builder()
                .title(request.getTitle())
                .content(request.getContent())
                .publishDate(LocalDate.parse(request.getPublishDate()))
                .isPublished(request.isPublished())
                .build();

        Announcement savedAnnouncement = announcementRepository.save(announcement);
        activityService.logActivity("お知らせ「" + announcement.getTitle() + "」を作成しました", "ANNOUNCEMENT_CREATE");

        return AnnouncementDto.fromEntity(savedAnnouncement);
    }

    public AnnouncementDto updateAnnouncement(Long id, AnnouncementRequest request) {
        Announcement announcement = announcementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Announcement not found"));

        announcement.setTitle(request.getTitle());
        announcement.setContent(request.getContent());
        announcement.setPublishDate(LocalDate.parse(request.getPublishDate()));
        announcement.setPublished(request.isPublished());

        Announcement savedAnnouncement = announcementRepository.save(announcement);
        activityService.logActivity("お知らせ「" + announcement.getTitle() + "」を更新しました", "ANNOUNCEMENT_UPDATE");

        return AnnouncementDto.fromEntity(savedAnnouncement);
    }

    public void deleteAnnouncement(Long id) {
        Announcement announcement = announcementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Announcement not found"));

        activityService.logActivity("お知らせ「" + announcement.getTitle() + "」を削除しました", "ANNOUNCEMENT_DELETE");
        announcementRepository.deleteById(id);
    }

    public long getTotalAnnouncements() {
        return announcementRepository.count();
    }
}
