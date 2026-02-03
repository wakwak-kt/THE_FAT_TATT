package com.thefattatt.api.dto;

import com.thefattatt.api.entity.Artwork;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ArtworkDto {
    private Long id;
    private String title;
    private String description;
    private String imageUrl;
    private String category;
    private Integer price;
    private boolean isAvailable;
    private String createdAt;

    public static ArtworkDto fromEntity(Artwork artwork) {
        return ArtworkDto.builder()
                .id(artwork.getId())
                .title(artwork.getTitle())
                .description(artwork.getDescription())
                .imageUrl(artwork.getImageUrl())
                .category(artwork.getCategory())
                .price(artwork.getPrice())
                .isAvailable(artwork.isAvailable())
                .createdAt(artwork.getCreatedAt().toString())
                .build();
    }
}
