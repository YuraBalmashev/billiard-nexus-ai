import { useCallback, useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    // Keep the breakpoint at 700px to match Apple's mobile navigation breakpoint
    setIsMobile(window.innerWidth < 700);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isMobile;
};
