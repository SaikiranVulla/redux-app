import { legacy_createStore as createStore, applyMiddleware } from "redux";
import todoReducer from "./reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import * as thunk from "redux-thunk";
import { createLogger } from "redux-logger";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
// };

const logger = createLogger();
// const persistedReducer = persistReducer(persistConfig, todoReducer);

const store = createStore(todoReducer, applyMiddleware(thunk, logger));
// const persistor = persistStore(store);

// export { store, persistor };
export default store;
