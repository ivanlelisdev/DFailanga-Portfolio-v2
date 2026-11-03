"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MotionControl() {
  const [paused, setPaused] = useState(false);
  const loops = useRef<gsap.core.Tween[]>([]);
  const pausePreference = useRef(false);
  useGSAP(() => {
    const root = document.querySelector<HTMLElement>("#portfolio");
    if (!root) return;
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".hero-title", {
          y: 32,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          clearProps: "all",
        });
        gsap.from(".hero-float", {
          y: 50,
          opacity: 0,
          duration: 1.25,
          stagger: 0.09,
          ease: "power3.out",
          clearProps: "opacity,translate",
        });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 28,
            opacity: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 94%",
              toggleActions: "play none none reverse",
            },
          });
        });
        gsap.utils
          .toArray<HTMLElement>(
            ".identity-art, .chapter-card, .poster, .print-art, .merch-art",
          )
          .forEach((el) => {
            gsap.from(el, {
              y: 45,
              opacity: 0,
              duration: 1.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 94%",
                toggleActions: "play none none reverse",
              },
            });
          });
        loops.current = gsap.utils
          .toArray<HTMLElement>(".hero-float")
          .map((el, index) =>
            gsap.to(el, {
              y: index % 2 ? -10 : 10,
              duration: 3 + index * 0.3,
              repeat: -1,
              yoyo: true,
              paused: pausePreference.current,
              ease: "sine.inOut",
              delay: 1.5,
            }),
          );
        return () => {
          loops.current = [];
        };
      },
      root,
    );
    return () => {
      media.revert();
      root.removeAttribute("data-motion");
    };
  }, []);

  return (
    <button
      className="motion-control"
      type="button"
      aria-pressed={paused}
      aria-label={paused ? "Resume motion" : "Pause motion"}
      onClick={() => {
        const next = !paused;
        setPaused(next);
        pausePreference.current = next;
        document
          .querySelector("#portfolio")
          ?.setAttribute("data-motion", next ? "paused" : "playing");
        loops.current.forEach((tween) => tween.paused(next));
      }}
    >
      <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
      <span className="motion-label">
        {paused ? "Resume motion" : "Pause motion"}
      </span>
    </button>
  );
}
