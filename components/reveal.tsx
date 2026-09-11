"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Delay in ms before the animation starts. */
  delay?: number;
  /** Animation variant. */
  variant?: "rise" | "fade";
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

export function Reveal({
  children,
  delay = 0,
  variant = "rise",
  className = "",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const animationName = variant === "rise" ? "magical-rise" : "magical-fade";

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={className}
      style={{
        opacity: visible ? undefined : 0,
        animation: visible
          ? `${animationName} 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`
          : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
