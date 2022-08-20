import { useState, useEffect, useMemo, useRef } from "react";

import { createContext, useContext } from "react";

const providerContext = createContext({});

const MonoProvider = providerContext.Provider;

const useMonospace = () => useContext(providerContext);

export default function MonospaceProvider({ children }) {
  const providerValueArray = useState("auto");

  return <MonoProvider value={providerValueArray}>{children}</MonoProvider>;
}

export const Monospace = ({ width, children }) => {
  const [monospaceWidth, setMonospaceWidth] = useMonospace();

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
