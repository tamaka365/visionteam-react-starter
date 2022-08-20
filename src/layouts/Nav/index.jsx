import Response from "../Response/index";

/**
 *
 * @param {object} props
 * @param {'mobile' | 'pc' | auto} props.device
 * @param {boolean} props.earlyResponse
 * @returns
 */
export default function Nav({ device, earlyResponse, children }) {
  return (
    <Response earlyResponse={earlyResponse} device={device}>
      <nav>{children}</nav>
    </Response>
  );
}
