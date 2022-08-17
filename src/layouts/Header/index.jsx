import { useEffect, useRef, useState } from "react";

import { CustomResponse } from "../Response/index";
import { useLayout } from "../LayoutProvider";

import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

/**
 *
 * @param {object} props
 * @param {'mobile' | 'pc' | auto} props.device
 * @returns
 */
export default function Header({
  device = "auto",
  position,
  holdPlace = true,
  children,
}) {
  const headerElementRef = useRef(null);

  const { earlyResponse } = useLayout();

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (position !== "fixed" || !holdPlace) {
      return;
    }

    const resizeListener = () => {
      setHeaderHeight(headerElementRef?.current?.offsetHeight || 0);
    };

    window.addEventListener("resize", resizeListener);

    resizeListener();

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [holdPlace, position]);

  if (position === "fixed" && holdPlace) {
    return (
      <CustomResponse earlyResponse={earlyResponse} device={device}>
        <div style={{ height: `${headerHeight}px` }}></div>
        <header ref={headerElementRef} className={cx("header", "fixed")}>
          {children}
        </header>
      </CustomResponse>
    );
  }

  return (
    <CustomResponse earlyResponse={earlyResponse} device={device}>
      <header className={cx("header", { fixed: position === "fixed" })}>
        {children}
      </header>
    </CustomResponse>
  );
}
