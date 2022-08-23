/** @jsxImportSource @emotion/react */
// eslint-disable-next-line no-unused-vars
import { jsx } from "@emotion/react";

export default function Box({ component = "div", ...props }) {
  const Tag = component;

  return <Tag {...props} />;
}
