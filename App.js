import { Provider } from "react-redux";
import store from "./redux/store";
import { Home } from "./screens";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
