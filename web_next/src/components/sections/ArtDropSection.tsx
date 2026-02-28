import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import ImageLightbox from "@/components/ui/ImageLightbox";
import type { Artwork } from "@/lib/types";

export default function ArtDropSection({
  artworks,
  showPrice = true,
  showSoldOut = true,
}: {
  artworks: Artwork[];
  showPrice?: boolean;
  showSoldOut?: boolean;
}) {
  return (
    <section id="artdrop" className="artdrop-section">
      <div className="container">

        <ScrollFadeUp>
          {artworks.length > 0 ? (
            <ImageLightbox artworks={artworks} showPrice={showPrice} showSoldOut={showSoldOut} />
          ) : (
            <div className="artdrop-empty">
              <i className="ri-gallery-line"></i>
              <p>現在公開中のアートドロップはありません</p>
            </div>
          )}
        </ScrollFadeUp>
      </div>
    </section>
  );
}
