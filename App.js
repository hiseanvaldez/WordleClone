import { Provider } from "react-redux";
import { store } from "./redux/store";
import Wordle from "./components/wordle";

export default function App() {
  return (
    <Provider store={store}>
      <Wordle />
    </Provider>
  );
}
