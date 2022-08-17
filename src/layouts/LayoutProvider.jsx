import { createContext, useContext } from "react";

export const LayoutContext = createContext({});

const LayoutProvider = LayoutContext.Provider;

export default LayoutProvider;

export const useLayout = () => useContext(LayoutContext);
