import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
   key: "persist-redux",
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const localStore = createStore(
   persistedReducer,
   composeWithDevTools(applyMiddleware(thunk))
);

export const persisterStore = persistStore(localStore);
