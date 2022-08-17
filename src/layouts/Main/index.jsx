import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export default function Main({ children }) {
  return <main className={cx("main")}>{children}</main>;
}
