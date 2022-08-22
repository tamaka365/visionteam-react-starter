import { useMemo } from "react";

import { useLayout } from "../LayoutProvider";

/**
 *
 * @param {Object} props
 * @param {number} props.minWidth
 * @param {number} props.maxWidth
 * @param {'mobile' | 'pc' | auto} props.device
 * @param {boolean} props.earlyResponse
 * @returns
 */
export default function Response({
  children,
  minWidth,
  maxWidth,
  device = "auto",
  earlyResponse,
}) {
  const { isMobile, currentWidth, minWidth: mWidth } = useLayout();

  const showStatus = useMemo(() => {
    if (minWidth && currentWidth < minWidth) {
      return false;
    }

    if (maxWidth && currentWidth > maxWidth) {
      return false;
    }

    switch (device) {
      case "mobile":
        return earlyResponse ? mWidth > currentWidth : isMobile;
      case "pc":
        return earlyResponse ? currentWidth > mWidth : !isMobile;
      default:
        return true;
    }
  }, [
    currentWidth,
    device,
    earlyResponse,
    isMobile,
    mWidth,
    maxWidth,
    minWidth,
  ]);

  return <>{showStatus && children}</>;
}
