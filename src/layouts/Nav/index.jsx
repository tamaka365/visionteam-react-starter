import Response from "../Response/index";
import { useLayout } from "../LayoutProvider";

/**
 *
 * @param {object} props
 * @param {'mobile' | 'pc' | auto} props.device
 * @returns
 */
export default function Nav({ device, children }) {
  const { earlyResponse } = useLayout();

  return (
    <Response earlyResponse={earlyResponse} device={device}>
      <nav>{children}</nav>
    </Response>
  );
}
