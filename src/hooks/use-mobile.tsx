
import { useCallback, useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    // Use 900px as the breakpoint to better handle intermediate tablet resolutions
    // and to be consistent with the navbar overflow dropdown implementation
    setIsMobile(window.innerWidth < 900);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isMobile;
};
