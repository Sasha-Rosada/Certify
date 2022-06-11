import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "../slices/certificates";
import RootSaga from "../sagas/index";

const DevToolExtension = window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const SagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(SagaMiddleware);

const store = configureStore({
    reducer: RootReducer,
    devTools: DevToolExtension,
    middleware: middleware
})

SagaMiddleware.run(RootSaga);

export default store;