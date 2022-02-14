import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { localStore, persisterStore } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
   <Provider store={localStore}>
      <PersistGate persistor={persisterStore}>
         <App />
      </PersistGate>
   </Provider>,
   document.getElementById("root")
);
