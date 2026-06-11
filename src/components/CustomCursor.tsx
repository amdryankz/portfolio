import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(true); // default to true to prevent flash of custom cursor on mobile
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy spring config for inner dot
  const innerSpringConfig = { damping: 45, stiffness: 600, mass: 0.1 };
  const innerX = useSpring(mouseX, innerSpringConfig);
  const innerY = useSpring(mouseY, innerSpringConfig);

  // Smooth lag spring config for outer ring
  const outerSpringConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const outerX = useSpring(mouseX, outerSpringConfig);
  const outerY = useSpring(mouseY, outerSpringConfig);

  useEffect(() => {
    const checkTouch = () => {
      const isTouch =
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    // Dynamically inject CSS style to hide default native cursor
    const style = document.createElement("style");
    style.id = "custom-cursor-hide-native";
    style.innerHTML = `
      @media (pointer: fine) {
        body, a, button, select, input, textarea, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Event delegation: find if current hovered element or parent is interactive
      const isInteractive = target.closest(
        'a, button, select, input, textarea, [role="button"], .cursor-pointer'
      );

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      const el = document.getElementById("custom-cursor-hide-native");
      if (el) el.remove();

      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isTouchDevice, isVisible, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Inner Snappy Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: innerX,
          y: innerY,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          scale: { duration: 0.15 },
          opacity: { duration: 0.15 },
        }}
      />

      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-blue-500/40 dark:border-blue-400/35 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          x: outerX,
          y: outerY,
          opacity: isVisible ? 1 : 0,
          width: isHovering ? 48 : 28,
          height: isHovering ? 48 : 28,
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.08)" : "rgba(59, 130, 246, 0)",
          borderColor: isHovering ? "rgba(59, 130, 246, 0.8)" : "rgba(59, 130, 246, 0.4)",
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 25 },
          height: { type: "spring", stiffness: 300, damping: 25 },
          backgroundColor: { duration: 0.15 },
          borderColor: { duration: 0.15 },
          opacity: { duration: 0.15 },
        }}
      />
    </>
  );
};
