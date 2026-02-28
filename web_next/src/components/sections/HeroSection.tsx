"use client";

import { useEffect, useRef, useCallback } from "react";

const SLOT_IMAGES = [
  { src: "/images/the-fat-tatt-moji-up.png", className: "moji-image" },
  { src: "/images/piza.png", className: "pizza-image" },
  { src: "/images/the-fat-tatt-moji-down.png", className: "moji-image" },
];

export default function HeroSection() {
  const reelRef = useRef<HTMLDivElement>(null);
  const pizzaContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{
    isSpinning: boolean;
    velocity: number;
    scrollPosition: number;
    startTime: number;
    pizzas: Array<{
      x: number;
      y: number;
      angle: number;
      speed: number;
      element: HTMLImageElement;
    }>;
    showPizzas: boolean;
  }>({
    isSpinning: true,
    velocity: 50,
    scrollPosition: -2000,
    startTime: Date.now(),
    pizzas: [],
    showPizzas: false,
  });

  const launchFlyingPizzas = useCallback(() => {
    const container = pizzaContainerRef.current;
    if (!container) return;

    const state = animationRef.current;
    state.pizzas = [];
    const pizzaCount = 16;

    for (let i = 0; i < pizzaCount; i++) {
      const imgEl = document.createElement("img");
      imgEl.src = "/images/piza.png";
      imgEl.alt = "";
      imgEl.className = "flying-pizza";
      container.appendChild(imgEl);

      state.pizzas.push({
        x: 0,
        y: 0,
        angle: (360 / pizzaCount) * i,
        speed: 4 + Math.random() * 4,
        element: imgEl,
      });
    }

    state.showPizzas = true;

    const animatePizzas = () => {
      if (!state.showPizzas) return;
      const maxDistance = 800;

      state.pizzas.forEach((pizza) => {
        pizza.x += Math.cos((pizza.angle * Math.PI) / 180) * pizza.speed;
        pizza.y += Math.sin((pizza.angle * Math.PI) / 180) * pizza.speed;

        const distance = Math.sqrt(pizza.x ** 2 + pizza.y ** 2);
        const opacity = Math.max(0, 1 - distance / maxDistance);

        pizza.element.style.transform = `translate(${pizza.x}px, ${pizza.y}px) rotate(${distance * 2}deg)`;
        pizza.element.style.opacity = String(opacity);
      });

      requestAnimationFrame(animatePizzas);
    };

    requestAnimationFrame(animatePizzas);
  }, []);

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;

    // Create slot reel content
    for (let setIndex = 0; setIndex < 10; setIndex++) {
      const setDiv = document.createElement("div");
      setDiv.style.display = "flex";
      setDiv.style.flexDirection = "column";

      SLOT_IMAGES.forEach((img) => {
        const wrapper = document.createElement("div");
        wrapper.className = "slot-image-wrapper";
        wrapper.style.height = `${window.innerHeight / 3}px`;

        const imgEl = document.createElement("img");
        imgEl.src = img.src;
        imgEl.alt = "";
        imgEl.className = img.className;

        wrapper.appendChild(imgEl);
        setDiv.appendChild(wrapper);
      });

      reel.appendChild(setDiv);
    }

    const state = animationRef.current;
    state.startTime = Date.now();

    const animate = () => {
      const imageHeight = window.innerHeight / 3;
      const totalHeight = imageHeight * SLOT_IMAGES.length;
      const elapsed = Date.now() - state.startTime;
      const spinDuration = 3000;
      const slowdownStart = 500;

      if (elapsed < spinDuration) {
        state.scrollPosition += state.velocity;

        if (elapsed > slowdownStart) {
          const slowdownProgress =
            (elapsed - slowdownStart) / (spinDuration - slowdownStart);
          state.velocity -= slowdownProgress * 0.8;
        }
      } else if (state.isSpinning) {
        state.isSpinning = false;
        state.velocity = 0;

        const screenCenter = window.innerHeight / 2;
        const middleImageCenter = imageHeight * 1.5;
        const targetNormalizedPosition = screenCenter - middleImageCenter;
        state.scrollPosition = targetNormalizedPosition + totalHeight;

        setTimeout(launchFlyingPizzas, 500);
      }

      const normalizedPosition =
        ((state.scrollPosition % totalHeight) + totalHeight) % totalHeight -
        totalHeight;

      if (state.isSpinning) {
        reel.style.transform = `translateY(${normalizedPosition}px)`;
        reel.style.transition = "none";
      } else {
        reel.style.transform = `translateY(${normalizedPosition}px)`;
        reel.style.transition = "transform 0.5s ease-out";
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const handleResize = () => {
      const wrappers = reel.querySelectorAll(".slot-image-wrapper");
      const newHeight = window.innerHeight / 3;
      wrappers.forEach((wrapper) => {
        (wrapper as HTMLElement).style.height = `${newHeight}px`;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [launchFlyingPizzas]);

  return (
    <section id="hero" className="hero-section">
      <div className="slot-container">
        <div ref={reelRef} className="slot-reel" />
      </div>
      <div ref={pizzaContainerRef} className="flying-pizzas" />
    </section>
  );
}
