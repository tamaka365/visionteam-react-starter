import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export default function Footer({ children }) {
  return <footer className={cx("footer")}>{children}</footer>;
}
