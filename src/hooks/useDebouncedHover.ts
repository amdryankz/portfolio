import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Shared hook for debounced hover state — prevents flicker when
 * moving the cursor between adjacent interactive elements.
 *
 * @param delay  Debounce delay in ms (default 120)
 * @returns      `{ hovered, onEnter, onLeave }`
 */
export function useDebouncedHover(delay = 120) {
  const [hovered, setHovered] = useState<number | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onEnter = useCallback(
    (index: number) => {
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setHovered(index), delay);
    },
    [delay],
  );

  const onLeave = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
    setHovered(null);
  }, []);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  return { hovered, onEnter, onLeave } as const;
}
