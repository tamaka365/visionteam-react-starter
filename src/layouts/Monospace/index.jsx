import { useState, useEffect, useMemo, useRef } from "react";
import LayoutProvider, { useLayout } from "../LayoutProvider";

export default function MonospaceProvider({ children }) {
  const providerValueArray = useState("auto");

  return <LayoutProvider value={providerValueArray}>{children}</LayoutProvider>;
}

export const Monospace = ({ width, children }) => {
  const [monospaceWidth, setMonospaceWidth] = useLayout();

  const divElementRef = useRef();

  const style = useMemo(
    () => ({
      width: width || monospaceWidth,
    }),
    [monospaceWidth, width]
  );

  useEffect(() => {
    if (!width) {
      return;
    }

    const regXp = /^[1-9]/;
    if (regXp.test(width)) {
      return setMonospaceWidth(width);
    }

    setMonospaceWidth(divElementRef.current.offsetWidth);
  }, [setMonospaceWidth, width, children]);

  return (
    <div style={style} ref={divElementRef}>
      {children}
    </div>
  );
};
