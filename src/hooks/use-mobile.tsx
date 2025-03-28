
import { useCallback, useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    // Use 700px as the breakpoint to match Apple's mobile navigation breakpoint
    setIsMobile(window.innerWidth < 700);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isMobile;
};
