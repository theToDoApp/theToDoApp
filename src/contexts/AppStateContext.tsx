import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useReducer,
} from 'react';

import {
  appStateReducer,
  intialState,
  AppState,
  AppStateDispatchAction,
} from '../reducers/appStatereducers';

const AppStateContext = createContext({} as AppState);

const AppStateDispatchContext = createContext(
  {} as Dispatch<AppStateDispatchAction>,
);

const AppStateProvider = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(appStateReducer, intialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppStateDispatchContext.Provider value={dispatch}>
        {children}
      </AppStateDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export {AppStateContext, AppStateDispatchContext, AppStateProvider};
