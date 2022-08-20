import { useMemo } from "react";

import { useLayout } from "../LayoutProvider";

/**
 *
 * @param {Object} props
 * @param {number} props.minWidth
 * @param {number} props.maxWidth
 * @param {'mobile' | 'pc' | auto} props.device
 * @returns
 */
export default function Response({
  children,
  minWidth,
  maxWidth,
  device = "auto",
  earlyResponse,
}) {
  const { isMobile, currentWidth } = useLayout();

  const showStatus = useMemo(() => {
    if (currentWidth < minWidth) {
      return false;
    }

    if (currentWidth > maxWidth) {
      return false;
    }

    switch (device) {
      case "mobile":
        return isMobile;
      case "pc":
        return !isMobile;
      default:
        return true;
    }
  }, [currentWidth, device, isMobile, maxWidth, minWidth]);

  if (earlyResponse) {
    return <>{device === "mobile" && children}</>;
  }

  return <>{showStatus && children}</>;
}
