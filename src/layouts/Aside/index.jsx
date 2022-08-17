import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export default function Aside({ children }) {
  return <div className={cx("aside")}>{children}</div>;
}
