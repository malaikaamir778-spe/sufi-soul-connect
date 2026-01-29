import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook that scrolls to top when route changes
 * Respects user's prefers-reduced-motion setting
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Instant scroll for accessibility
      window.scrollTo(0, 0);
    } else {
      // Smooth scroll for better UX
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname]);
};
