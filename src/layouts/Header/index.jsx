import Response from "../Response/index";

import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

/**
 *
 * @param {object} props
 * @param {'static' | 'sticky' | fixed} props.position
 * @param {'mobile' | 'pc' | auto} props.device
 * @param {boolean} props.earlyResponse
 * @returns
 */
export default function Header({
  device = "auto",
  position,
  earlyResponse,
  children,
}) {
  return (
    <Response earlyResponse={earlyResponse} device={device}>
      <header className={cx("header", { position })}>{children}</header>
    </Response>
  );
}
