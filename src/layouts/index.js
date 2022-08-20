import Layout from "./Layout/index";
import Header from "./Header/index";
import Main from "./Main/index";
import Response from "./Response/index";
import Content from "./Content/index";
import Aside from "./Aside/index";
import Nav from "./Nav/index";
import MonospaceProvider, { Monospace } from "./Monospace/index";

import Footer from "./Footer/index";

import { useLayout } from "./LayoutProvider";

const useIsMobile = () => {
  const { isMobile } = useLayout();

  return isMobile;
};

export {
  Layout,
  Header,
  Response,
  Main,
  Content,
  Footer,
  useIsMobile,
  Aside,
  Nav,
  MonospaceProvider,
  Monospace,
};
