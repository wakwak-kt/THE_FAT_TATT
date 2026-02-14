/**
 * THE FAT TATT - Main JavaScript
 */

// ===================================
// Global Variables
// ===================================
let isMobileMenuOpen = false;
let isSlotSpinning = true;
let slotVelocity = 50;
let slotScrollPosition = -2000;
let slotStartTime = Date.now();
let flyingPizzas = [];
let showPizzas = false;

const slotImages = [
  'images/the-fat-tatt-moji-up.png',
  'images/piza.png',
  'images/the-fat-tatt-moji-down.png'
];

// ===================================
// Initialization
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initSlotMachine();
  initScrollAnimations();
});

// ===================================
// Navigation Functions
// ===================================
function initNavbar() {
  window.addEventListener('scroll', handleNavbarScroll);
}

function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  closeMobileMenu();
}

function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const icon = menuBtn.querySelector('i');

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('open');
    icon.className = 'ri-close-line';
  } else {
    mobileMenu.classList.remove('open');
    icon.className = 'ri-menu-line';
  }
}

function closeMobileMenu() {
  isMobileMenuOpen = false;
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const icon = menuBtn.querySelector('i');

  mobileMenu.classList.remove('open');
  icon.className = 'ri-menu-line';
}

// ===================================
// Slot Machine Animation
// ===================================
function initSlotMachine() {
  const slotReel = document.getElementById('slot-reel');

  // Create slot reel content
  createSlotReelContent(slotReel);

  // Start animation
  requestAnimationFrame(animateSlot);
}

function createSlotReelContent(container) {
  // Create 10 sets of images for loop effect
  for (let setIndex = 0; setIndex < 10; setIndex++) {
    const setDiv = document.createElement('div');
    setDiv.style.display = 'flex';
    setDiv.style.flexDirection = 'column';

    slotImages.forEach((img, i) => {
      const isMojiImage = img.includes('moji-up') || img.includes('moji-down');
      const wrapper = document.createElement('div');
      wrapper.className = 'slot-image-wrapper';
      wrapper.style.height = `${window.innerHeight / 3}px`;

      const imgEl = document.createElement('img');
      imgEl.src = img;
      imgEl.alt = '';
      imgEl.className = isMojiImage ? 'moji-image' : 'pizza-image';

      wrapper.appendChild(imgEl);
      setDiv.appendChild(wrapper);
    });

    container.appendChild(setDiv);
  }
}

function animateSlot() {
  const imageHeight = window.innerHeight / 3;
  const totalHeight = imageHeight * slotImages.length;
  const elapsed = Date.now() - slotStartTime;
  const spinDuration = 6000;
  const slowdownStart = 2500;

  if (elapsed < spinDuration) {
    slotScrollPosition += slotVelocity;

    // Slowdown
    if (elapsed > slowdownStart) {
      const slowdownProgress = (elapsed - slowdownStart) / (spinDuration - slowdownStart);
      slotVelocity -= slowdownProgress * 0.8;
    }
  } else if (isSlotSpinning) {
    // Stop spinning
    isSlotSpinning = false;
    slotVelocity = 0;

    // Calculate target position for middle image (pizza)
    const screenCenter = window.innerHeight / 2;
    const middleImageCenter = imageHeight * 1.5;
    const targetNormalizedPosition = screenCenter - middleImageCenter;
    slotScrollPosition = targetNormalizedPosition + totalHeight;

    // Launch flying pizzas after 500ms
    setTimeout(launchFlyingPizzas, 500);
  }

  // Update position
  const normalizedPosition = ((slotScrollPosition % totalHeight) + totalHeight) % totalHeight - totalHeight;
  const slotReel = document.getElementById('slot-reel');

  if (isSlotSpinning) {
    slotReel.style.transform = `translateY(${normalizedPosition}px)`;
    slotReel.style.transition = 'none';
  } else {
    slotReel.style.transform = `translateY(${normalizedPosition}px)`;
    slotReel.style.transition = 'transform 0.5s ease-out';
  }

  requestAnimationFrame(animateSlot);
}

function launchFlyingPizzas() {
  const pizzaCount = 16;
  const container = document.getElementById('flying-pizzas');

  flyingPizzas = [];

  for (let i = 0; i < pizzaCount; i++) {
    const pizza = {
      id: i,
      x: 0,
      y: 0,
      angle: (360 / pizzaCount) * i,
      speed: 4 + Math.random() * 4,
      element: document.createElement('img')
    };

    pizza.element.src = 'images/piza.png';
    pizza.element.alt = '';
    pizza.element.className = 'flying-pizza';
    container.appendChild(pizza.element);

    flyingPizzas.push(pizza);
  }

  showPizzas = true;
  requestAnimationFrame(animateFlyingPizzas);
}

function animateFlyingPizzas() {
  if (!showPizzas) return;

  const maxDistance = 800;

  flyingPizzas.forEach(pizza => {
    pizza.x += Math.cos((pizza.angle * Math.PI) / 180) * pizza.speed;
    pizza.y += Math.sin((pizza.angle * Math.PI) / 180) * pizza.speed;

    const distance = Math.sqrt(pizza.x ** 2 + pizza.y ** 2);
    const opacity = Math.max(0, 1 - distance / maxDistance);

    pizza.element.style.transform = `translate(${pizza.x}px, ${pizza.y}px) rotate(${distance * 2}deg)`;
    pizza.element.style.opacity = opacity;
  });

  requestAnimationFrame(animateFlyingPizzas);
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-up');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Get animation delay from style attribute
        const delay = entry.target.style.animationDelay || '0s';
        const delayMs = parseFloat(delay) * 1000;

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delayMs);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));
}

// ===================================
// Window Resize Handler
// ===================================
window.addEventListener('resize', function() {
  // Recalculate slot image heights on resize
  const wrappers = document.querySelectorAll('.slot-image-wrapper');
  const newHeight = window.innerHeight / 3;
  wrappers.forEach(wrapper => {
    wrapper.style.height = `${newHeight}px`;
  });
});
