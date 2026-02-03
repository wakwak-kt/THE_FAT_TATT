package com.thefattatt.api.config;

import com.thefattatt.api.entity.AdminUser;
import com.thefattatt.api.entity.Announcement;
import com.thefattatt.api.entity.Artwork;
import com.thefattatt.api.entity.Booking;
import com.thefattatt.api.repository.AdminUserRepository;
import com.thefattatt.api.repository.AnnouncementRepository;
import com.thefattatt.api.repository.ArtworkRepository;
import com.thefattatt.api.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final AdminUserRepository adminUserRepository;
    private final BookingRepository bookingRepository;
    private final AnnouncementRepository announcementRepository;
    private final ArtworkRepository artworkRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (adminUserRepository.count() == 0) {
            initializeAdminUsers();
        }

        if (bookingRepository.count() == 0) {
            initializeSampleBookings();
        }

        if (announcementRepository.count() == 0) {
            initializeSampleAnnouncements();
        }

        if (artworkRepository.count() == 0) {
            initializeSampleArtworks();
        }
    }

    private void initializeAdminUsers() {
        AdminUser superAdmin = AdminUser.builder()
                .name("管理者")
                .email("admin@thefattatt.com")
                .password(passwordEncoder.encode("admin123"))
                .role(AdminUser.Role.SUPER_ADMIN)
                .isActive(true)
                .build();
        adminUserRepository.save(superAdmin);

        AdminUser staff = AdminUser.builder()
                .name("スタッフ太郎")
                .email("staff@thefattatt.com")
                .password(passwordEncoder.encode("staff123"))
                .role(AdminUser.Role.STAFF)
                .isActive(true)
                .build();
        adminUserRepository.save(staff);
    }

    private void initializeSampleBookings() {
        Booking booking1 = Booking.builder()
                .customerName("山田太郎")
                .email("yamada@example.com")
                .phone("090-1234-5678")
                .date(LocalDate.now().plusDays(3))
                .time(LocalTime.of(14, 0))
                .service("トライバルタトゥー")
                .status(Booking.Status.PENDING)
                .notes("初めてのタトゥーです。相談も含めてお願いします。")
                .build();
        bookingRepository.save(booking1);

        Booking booking2 = Booking.builder()
                .customerName("佐藤花子")
                .email("sato@example.com")
                .phone("080-9876-5432")
                .date(LocalDate.now().plusDays(7))
                .time(LocalTime.of(11, 0))
                .service("ワンポイントタトゥー")
                .status(Booking.Status.CONFIRMED)
                .notes("腕に小さな花のデザインを希望")
                .build();
        bookingRepository.save(booking2);

        Booking booking3 = Booking.builder()
                .customerName("鈴木一郎")
                .email("suzuki@example.com")
                .phone("070-1111-2222")
                .date(LocalDate.now().minusDays(2))
                .time(LocalTime.of(15, 30))
                .service("カバーアップ")
                .status(Booking.Status.COMPLETED)
                .notes("")
                .build();
        bookingRepository.save(booking3);
    }

    private void initializeSampleAnnouncements() {
        Announcement announcement1 = Announcement.builder()
                .title("年末年始の営業について")
                .content("12月29日から1月3日まで休業させていただきます。新年は1月4日から通常営業いたします。")
                .publishDate(LocalDate.now())
                .isPublished(true)
                .build();
        announcementRepository.save(announcement1);

        Announcement announcement2 = Announcement.builder()
                .title("新しいアーティストが加入しました")
                .content("新たにアーティストのKENが当スタジオに加入しました。トラディショナルスタイルを得意としています。")
                .publishDate(LocalDate.now().minusDays(7))
                .isPublished(true)
                .build();
        announcementRepository.save(announcement2);
    }

    private void initializeSampleArtworks() {
        Artwork artwork1 = Artwork.builder()
                .title("トライバルドラゴン")
                .description("力強いトライバルスタイルのドラゴンデザイン。腕や背中におすすめです。")
                .imageUrl("https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400")
                .category("トライバル")
                .price(50000)
                .isAvailable(true)
                .build();
        artworkRepository.save(artwork1);

        Artwork artwork2 = Artwork.builder()
                .title("和彫り鯉")
                .description("伝統的な和彫りスタイルの鯉。縁起の良いモチーフとして人気です。")
                .imageUrl("https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=400")
                .category("和彫り")
                .price(80000)
                .isAvailable(true)
                .build();
        artworkRepository.save(artwork2);

        Artwork artwork3 = Artwork.builder()
                .title("幾何学模様")
                .description("モダンな幾何学デザイン。シンプルながらインパクトのあるスタイル。")
                .imageUrl("https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=400")
                .category("幾何学")
                .price(35000)
                .isAvailable(true)
                .build();
        artworkRepository.save(artwork3);
    }
}
