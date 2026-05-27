import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top on every route or in-page hash change,
 * covering all internal navigation links (desktop and mobile).
 */
export const ScrollToTop = () => {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, search]);

  return null;
};
