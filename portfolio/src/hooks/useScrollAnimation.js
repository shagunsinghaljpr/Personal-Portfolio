import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean `isVisible`.
 * When the element enters the viewport the boolean flips to true.
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref       = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve once visible so the animation only plays once
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  return { ref, isVisible };
}

/**
 * Tracks the active nav section based on scroll position.
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (
          scrollY >= el.offsetTop &&
          scrollY < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
