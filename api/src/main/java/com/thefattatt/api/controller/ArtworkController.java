package com.thefattatt.api.controller;

import com.thefattatt.api.dto.ArtworkDto;
import com.thefattatt.api.service.ArtworkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/admin/artworks")
@RequiredArgsConstructor
public class ArtworkController {

    private final ArtworkService artworkService;

    @GetMapping
    public ResponseEntity<List<ArtworkDto>> getAllArtworks() {
        return ResponseEntity.ok(artworkService.getAllArtworks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArtworkDto> getArtworkById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(artworkService.getArtworkById(id));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<ArtworkDto> createArtwork(
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("category") String category,
            @RequestParam("price") Integer price,
            @RequestParam("isAvailable") boolean isAvailable,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) {
        return ResponseEntity.ok(artworkService.createArtwork(title, description, category, price, isAvailable, image));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ArtworkDto> updateArtwork(
            @PathVariable Long id,
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("category") String category,
            @RequestParam("price") Integer price,
            @RequestParam("isAvailable") boolean isAvailable,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) {
        try {
            return ResponseEntity.ok(artworkService.updateArtwork(id, title, description, category, price, isAvailable, image));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArtwork(@PathVariable Long id) {
        try {
            artworkService.deleteArtwork(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
