import Response from "../Response/index";
import { useLayout } from "../LayoutProvider";

import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

/**
 *
 * @param {object} props
 * @param {'static' | 'sticky' | fixed} props.position
 * @param {'mobile' | 'pc' | auto} props.device
 * @returns
 */
export default function Header({ device = "auto", position, children }) {
  const { earlyResponse } = useLayout();

  return (
    <Response earlyResponse={earlyResponse} device={device}>
      <header className={cx("header", { position })}>{children}</header>
    </Response>
  );
}
