import { useEffect, useState, useMemo } from "react";

import { Flex } from "src/components/basic/index";

import LayoutProvider from "../LayoutProvider";

import isMobile from "is-mobile";

/**
 *
 * @param {Object} props
 * @param {number} props.mobileWidth
 * @param {number} props.minWidth
 * @param {number} props.maxWidth
 * @param {boolean} props.responseEarly
 * @param {'size' | 'device'} props.mode
 * @returns
 */
export default function Layout({
  mobileWidth = 750,
  minWidth = 1280,
  maxWidth = 1920,
  children,
  responseEarly = false,
  mode = "size",
}) {
  const [currentWidth, setCurrentWidth] = useState();

  const zoomLevel = useMemo(
    () => (currentWidth > maxWidth ? currentWidth / maxWidth : 1),
    [currentWidth, maxWidth]
  );

  const providerValueObject = useMemo(
    () => ({
      minWidth,
      maxWidth,
      earlyResponse: responseEarly && currentWidth <= minWidth,
      currentWidth,
      isMobile: mode === "size" ? currentWidth <= mobileWidth : isMobile(),
    }),
    [currentWidth, maxWidth, minWidth, mobileWidth, mode, responseEarly]
  );

  useEffect(() => {
    const resizeListener = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeListener);

    resizeListener();

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const style = useMemo(
    () => ({
      zoom: zoomLevel,
      MozTransform: `scale(${zoomLevel})`,
      MozTransformOrigin: "0 0",
      minHeight: `calc(100vh / ${zoomLevel})`,
    }),
    [zoomLevel]
  );

  return (
    <>
      {currentWidth && (
        <LayoutProvider value={providerValueObject}>
          <Flex fd="column" ai="center" style={style}>
            {children}
          </Flex>
        </LayoutProvider>
      )}
    </>
  );
}
