import { useMemo } from "react";

import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

/**
 *
 * @param {Object} props
 * @param {'column' | 'row' | 'column-reverse' | 'row-reverse'} props.fd
 * @param {'wrap' | 'no-wrap'} props.fw
 * @param {'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'} props.ai
 * @param {'baseline' | 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch'} props.jc
 * @param {'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'stretch'} props.ac
 * @param {string} props.gap
 * @returns
 */
export default function Flex({
  fd,
  fw,
  ai,
  jc,
  ac,
  gap,
  children,
  className,
  style,
}) {
  const flexGap = useMemo(
    () => (gap ? { ...style, gap } : style),
    [gap, style]
  );

  return (
    <div
      className={cx(
        className,
        "flex",
        { [fd]: fd },
        { [fw]: fw },
        { [`ai-${ai}`]: ai, [`jc-${jc}`]: jc, [`ac-${ac}`]: ac }
      )}
      style={flexGap}
    >
      {children}
    </div>
  );
}
