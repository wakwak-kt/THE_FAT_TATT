package com.thefattatt.api.controller;

import com.thefattatt.api.dto.AnnouncementDto;
import com.thefattatt.api.dto.AnnouncementRequest;
import com.thefattatt.api.service.AnnouncementService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/announcements")
@RequiredArgsConstructor
public class AnnouncementController {

    private final AnnouncementService announcementService;

    @GetMapping
    public ResponseEntity<List<AnnouncementDto>> getAllAnnouncements() {
        return ResponseEntity.ok(announcementService.getAllAnnouncements());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AnnouncementDto> getAnnouncementById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(announcementService.getAnnouncementById(id));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<AnnouncementDto> createAnnouncement(@Valid @RequestBody AnnouncementRequest request) {
        return ResponseEntity.ok(announcementService.createAnnouncement(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AnnouncementDto> updateAnnouncement(
            @PathVariable Long id,
            @Valid @RequestBody AnnouncementRequest request
    ) {
        try {
            return ResponseEntity.ok(announcementService.updateAnnouncement(id, request));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnnouncement(@PathVariable Long id) {
        try {
            announcementService.deleteAnnouncement(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
