import { useMemo } from "react";

/**
 *
 * @param {object} props
 * @param {number} props.shrink
 * @param {number} props.grow
 * @param {number} props.order
 * @param {string} props.fb
 * @param {'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'} props.as
 * @returns
 */
export default function FlexItem({
  shrink = 1,
  grow = 0,
  order = 0,
  fb = "auto",
  as = "auto",
  children,
}) {
  const style = useMemo(
    () => ({
      flexShrink: shrink,
      flexGrow: grow,
      order,
      flexBasis: fb,
      alignSelf: as,
    }),
    [as, fb, grow, order, shrink]
  );

  return <div style={style}>{children}</div>;
}
