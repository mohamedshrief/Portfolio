/**
 * مكون الكاروسيل مع تأثير Coverflow
 * يستخدم مكتبة Swiper.js لعرض الصور بتأثير ثلاثي الأبعاد
 * يحتوي على:
 * - 3 صور للمستخدم في أدوار مختلفة
 * - تأثير Coverflow ثلاثي الأبعاد
 * - تشغيل تلقائي للشرائح
 * - دعم السحب واللمس للتنقل
 */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
// استيراد صور المستخدم
import portfolio1 from "../assets/portfolio.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
// استيراد مكون الشعار المتحرك
import Slogan from "./ui/slogan";

export default function CoverflowCarousel() {
  // بيانات الشرائح - كل شريحة تحتوي على صورة ووصف
  const slides = [
    { id: 1, src: portfolio1, alt: "Slide 1", caption: "Software Engineer" },
    { id: 2, src: portfolio2, alt: "Slide 2", caption: "Material Engineer" },
    {
      id: 3,
      src: portfolio3,
      alt: "Slide 3",
      caption: "Medical Analysis Specialist",
    },
  ];

  return (
    <section aria-label="Coverflow carousel" className="coverflow-section">
      <Swiper
        // دالة يتم استدعاؤها عند تهيئة Swiper
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.autoplay.start(); // بدء التشغيل التلقائي بعد 500ms
          }, 500);
        }}
        key={slides.length} // إعادة تهيئة Swiper عند تغيير عدد الشرائح
        modules={[EffectCoverflow]} // الوحدات المطلوبة
        effect="coverflow" // تأثير Coverflow ثلاثي الأبعاد
        grabCursor={true} // تغيير المؤشر عند السحب
        centeredSlides={true} // توسيط الشرائح
        slidesPerView={"auto"} // عرض الشرائح تلقائياً
        loop={true} // تكرار الشرائح
        watchSlidesProgress={true} // مراقبة تقدم الشرائح
        // إعدادات التشغيل التلقائي
        // autoplay={{
        //   delay: 2000, // تأخير 2 ثانية بين الشرائح
        //   disableOnInteraction: false, // عدم إيقاف التشغيل عند التفاعل
        //   pauseOnMouseEnter: false, // عدم إيقاف التشغيل عند التمرير
        //   stopOnLastSlide: false, // عدم التوقف عند الشريحة الأخيرة
        // }}
        simulateTouch={true} // محاكاة اللمس
        touchStartPreventDefault={false} // عدم منع اللمس الافتراضي
        // إعدادات تأثير Coverflow
        coverflowEffect={{
          rotate: 50, // زاوية الدوران
          stretch: 0, // التمدد
          depth: 100, // العمق
          modifier: 1, // معدل التعديل
          slideShadows: false, // إزالة الظلال
        }}
        className="myCoverflowSwiper"
        // نقاط التوقف للشاشات المختلفة
        breakpoints={{
          320: {
            // الشاشات الصغيرة
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            // الشاشات المتوسطة
            slidesPerView: "auto",
            spaceBetween: 30,
          },
          1024: {
            // الشاشات الكبيرة
            slidesPerView: "auto",
            spaceBetween: 40,
          },
        }}
      >
        {/* عرض الشرائح */}
        {slides.map((s) => (
          <SwiperSlide key={s.id} className="coverflow-slide">
            <div className="slide-inner">
              {/* الصورة مع ظل وردي */}
              <img
                className="shadow-3xl shadow-fuchsia-700"
                src={s.src}
                alt={s.alt}
              />
              {/* التسمية التوضيحية مع تأثير الشعار المتحرك */}
              <div className="slide-caption text-center">
                <Slogan sloganText={s.caption} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
