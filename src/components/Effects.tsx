import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function MotionSystem() {
  const reducedMotion = useReducedMotion();
  const { pathname } = useLocation();

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add("reduced-motion");
      return () => document.documentElement.classList.remove("reduced-motion");
    }

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    reveals.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        },
      );
    });

    const heroSection = document.querySelector<HTMLElement>(".hero");
    const heroArtwork = document.querySelector<HTMLElement>(".art-hero");
    const magneticTargets = Array.from(document.querySelectorAll<HTMLElement>(".button, .header-cta"));
    const removeMagneticListeners: Array<() => void> = [];
    const handleHeroMove = (event: PointerEvent) => {
      if (!heroArtwork) return;
      const { innerWidth, innerHeight } = window;
      heroArtwork.style.setProperty("--hero-x", `${((event.clientX / innerWidth) - 0.5) * -8}px`);
      heroArtwork.style.setProperty("--hero-y", `${((event.clientY / innerHeight) - 0.5) * -6}px`);
    };
    heroSection?.addEventListener("pointermove", handleHeroMove, { passive: true });
    magneticTargets.forEach((element) => {
      const move = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.1;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.1;
        element.style.transform = `translate(${x}px, ${y}px)`;
      };
      const reset = () => { element.style.transform = ""; };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", reset);
      removeMagneticListeners.push(() => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", reset);
      });
    });

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(reveals);
      heroSection?.removeEventListener("pointermove", handleHeroMove);
      removeMagneticListeners.forEach((removeListeners) => removeListeners());
      magneticTargets.forEach((element) => { element.style.transform = ""; });
    };
  }, [pathname, reducedMotion]);

  return null;
}

export function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    document.body.classList.add("has-custom-cursor");
    const handleMove = (event: PointerEvent) => {
      node.style.setProperty("--cursor-x", `${event.clientX}px`);
      node.style.setProperty("--cursor-y", `${event.clientY}px`);
      const target = event.target;
      node.classList.toggle("cursor-hover", target instanceof Element && Boolean(target.closest("a, button, input, textarea, select")));
    };
    const handleLeave = () => node.classList.add("cursor-hidden");
    const handleEnter = () => node.classList.remove("cursor-hidden");
    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);
    window.addEventListener("pointerenter", handleEnter);
    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("pointerenter", handleEnter);
    };
  }, [reducedMotion]);
  return <div className="cursor-follower" ref={ref} aria-hidden="true"><span /></div>;
}
