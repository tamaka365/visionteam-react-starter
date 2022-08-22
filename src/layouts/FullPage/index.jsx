export default function FullPage({
  children,
  width = "100vw",
  height = "100vh",
}) {
  return (
    <div
      style={{
        height,
        width,
        maxWidth: `calc(${height} / 9 * 16)`,
        maxHeight: `calc(${width} / 4 * 3)`,
      }}
    >
      {children}
    </div>
  );
}
