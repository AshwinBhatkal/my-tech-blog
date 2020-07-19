import { useReducer } from "react";
import { createContainer } from "react-tracked";
import initialState from "./initialState";
import rootReducer from "./reducers";
import toggleNavReducer from "./reducers/toggleNavReducer";

const useValue = () => useReducer(toggleNavReducer, initialState);

export const { Provider, useTrackedState, useUpdate: useDispatch } = createContainer(useValue);
