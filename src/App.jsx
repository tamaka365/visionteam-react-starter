import { Provider as StoreProvider } from "react-redux";
import store from "./store/index";

import Routes from "./routes/index";

import "./App.scss";

export default function App() {
  return (
    <StoreProvider store={store}>
      <Routes />
    </StoreProvider>
  );
}
