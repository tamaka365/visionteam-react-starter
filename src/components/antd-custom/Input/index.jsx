import { forwardRef } from "react";

import { Input as AntdInput } from "antd";

import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

const Input = forwardRef(({ className, ...props }, ref) => {
  return <AntdInput className={cx("input", className)} {...props} ref={ref} />;
});

export default Input;
