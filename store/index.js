import { useReducer } from "react";
import { createContainer } from "react-tracked";
import rootReducer from "./reducers";
import initialState from "./initialState";
import toggleNavReducer from "./reducers/toggleNavReducer";

const useValue = () => useReducer(toggleNavReducer, initialState);

export const { Provider, useTrackedState, useUpdate: useDispatch } = createContainer(useValue);
