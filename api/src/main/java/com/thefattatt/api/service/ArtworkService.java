package com.thefattatt.api.service;

import com.thefattatt.api.dto.ArtworkDto;
import com.thefattatt.api.entity.Artwork;
import com.thefattatt.api.repository.ArtworkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ArtworkService {

    private final ArtworkRepository artworkRepository;
    private final ActivityService activityService;

    @Value("${upload.path}")
    private String uploadPath;

    public List<ArtworkDto> getAllArtworks() {
        return artworkRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(ArtworkDto::fromEntity)
                .collect(Collectors.toList());
    }

    public List<ArtworkDto> getAvailableArtworks() {
        return artworkRepository.findByIsAvailableTrueOrderByCreatedAtDesc().stream()
                .map(ArtworkDto::fromEntity)
                .collect(Collectors.toList());
    }

    public ArtworkDto getArtworkById(Long id) {
        Artwork artwork = artworkRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Artwork not found"));
        return ArtworkDto.fromEntity(artwork);
    }

    public ArtworkDto createArtwork(String title, String description, String category,
                                     Integer price, boolean isAvailable, MultipartFile image) {
        String imageUrl = saveImage(image);

        Artwork artwork = Artwork.builder()
                .title(title)
                .description(description)
                .category(category)
                .price(price)
                .isAvailable(isAvailable)
                .imageUrl(imageUrl)
                .build();

        Artwork savedArtwork = artworkRepository.save(artwork);
        activityService.logActivity("アートワーク「" + artwork.getTitle() + "」を追加しました", "ARTWORK_CREATE");

        return ArtworkDto.fromEntity(savedArtwork);
    }

    public ArtworkDto updateArtwork(Long id, String title, String description, String category,
                                     Integer price, boolean isAvailable, MultipartFile image) {
        Artwork artwork = artworkRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Artwork not found"));

        artwork.setTitle(title);
        artwork.setDescription(description);
        artwork.setCategory(category);
        artwork.setPrice(price);
        artwork.setAvailable(isAvailable);

        if (image != null && !image.isEmpty()) {
            String imageUrl = saveImage(image);
            artwork.setImageUrl(imageUrl);
        }

        Artwork savedArtwork = artworkRepository.save(artwork);
        activityService.logActivity("アートワーク「" + artwork.getTitle() + "」を更新しました", "ARTWORK_UPDATE");

        return ArtworkDto.fromEntity(savedArtwork);
    }

    public void deleteArtwork(Long id) {
        Artwork artwork = artworkRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Artwork not found"));

        activityService.logActivity("アートワーク「" + artwork.getTitle() + "」を削除しました", "ARTWORK_DELETE");
        artworkRepository.deleteById(id);
    }

    public long getTotalArtworks() {
        return artworkRepository.count();
    }

    private String saveImage(MultipartFile image) {
        if (image == null || image.isEmpty()) {
            return null;
        }

        try {
            String filename = UUID.randomUUID().toString() + "_" + image.getOriginalFilename();
            Path uploadDir = Paths.get(uploadPath);

            if (!Files.exists(uploadDir)) {
                Files.createDirectories(uploadDir);
            }

            Path filePath = uploadDir.resolve(filename);
            Files.copy(image.getInputStream(), filePath);

            return "/uploads/" + filename;
        } catch (IOException e) {
            throw new RuntimeException("Failed to save image", e);
        }
    }
}
