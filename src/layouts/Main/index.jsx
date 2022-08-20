import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

/**
 *
 * @param {object} props
 * @param {'auto' | '100'} props.width
 * @returns
 */
export default function Main({ width, children }) {
  return (
    <main className={cx("main", { [`w-${width}`]: width })}>{children}</main>
  );
}
