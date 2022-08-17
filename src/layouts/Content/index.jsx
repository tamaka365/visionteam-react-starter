import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export default function Content({ children }) {
  return <div className={cx("content")}>{children}</div>;
}
