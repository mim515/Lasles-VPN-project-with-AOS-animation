// Testimonial Data (your array unchanged)
const testimonials = [
  /* ... your testimonial objects ... */
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    comment:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    image: "../images/user2.png",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: 4.5,
    comment:
      "I like it because I like to travel far and still can connect with high speed.",
    image: "/src/images/user2.png",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    comment:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
    image: "/src/images/user3.png",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5.0,
    comment:
      "The best VPN service I've ever used. Perfect for remote work and accessing region-locked content. Highly recommended!",
    image: "/src/images/user1.png",
  },
  {
    name: "Sarah Williams",
    location: "London, UK",
    rating: 4.8,
    comment:
      "Excellent service with great speeds. I use it daily for both work and streaming. The customer support is outstanding.",
    image: "/src/images/user2.png",
  },
  {
    name: "Alex Rodriguez",
    location: "Madrid, Spain",
    rating: 4.7,
    comment:
      "Been using it for 6 months now. The connection is stable and secure. Perfect for my online banking and business needs.",
    image: "/src/images/user3.png",
  },
  {
    name: "Emma Thompson",
    location: "Sydney, Australia",
    rating: 4.9,
    comment:
      "Amazing VPN service with fantastic global coverage. Never had any issues with speed or connectivity. Worth every penny!",
    image: "/src/images/user1.png",
  },
  // Add more testimonials if needed
];

// Generate testimonial slides (runs immediately on DOMContentLoaded)
function generateTestimonials() {
  const swiperWrapper = document.querySelector(
    ".testimonialSwiper .swiper-wrapper"
  );
  if (!swiperWrapper) return;

  testimonials.forEach((t) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="p-8 border-2 border-gray-200 rounded-2xl hover:border-red-500 transition-all">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-4">
            <img src="${t.image}" alt="${t.name}" class="w-12 h-12 rounded-full">
            <div>
              <h4 class="font-medium text-lg">${t.name}</h4>
              <p class="text-gray-400">${t.location}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-medium">${t.rating}</span>
            <img src="/src/images/star.png" alt="star" class="w-4 h-4">
          </div>
        </div>
        <p class="text-gray-600">"${t.comment}"</p>
      </div>
    `;
    swiperWrapper.appendChild(slide);
  });
}

// Initialize Swiper AFTER slides are added
function initTestimonialSwiper() {
  // ensure pagination element exists in DOM
  const paginationEl = document.querySelector(
    ".testimonialSwiper .swiper-pagination"
  );
  if (!paginationEl) {
    console.warn("Swiper pagination element not found");
  }

  const swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index, className) => `<span class="${className}"></span>`,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
    // extra safety: observe DOM changes so Swiper recalculates if container changes
    observer: true,
    observeParents: true,
  });

  // Extra safety: if AOS or other animations hide elements initially, update after a short delay
  setTimeout(() => swiper.update(), 250);

  return swiper;
}

// Run sequence: generate slides -> initialize swiper
document.addEventListener("DOMContentLoaded", () => {
  generateTestimonials();
  window.testimonialSwiperInstance = initTestimonialSwiper();
});
