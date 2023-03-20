// Interfaces
export interface AppState {
  isSideMenuOpened: boolean;
}

enum AppStateDispatchActionType {
  sideMenuToggle,
}

export interface AppStateDispatchAction {
  type: AppStateDispatchActionType;
  payload?: any;
}

const intialState: AppState = {
  isSideMenuOpened: false,
};

// Reducer
function appStateReducer(
  state: AppState,
  action: AppStateDispatchAction,
): AppState {
  const {type} = action;

  switch (type) {
    case AppStateDispatchActionType.sideMenuToggle:
      return {
        ...state,
        isSideMenuOpened: !state.isSideMenuOpened,
      };

    default:
      return state;
  }
}

// Action Creators
function toggleSideMenu(): AppStateDispatchAction {
  return {
    type: AppStateDispatchActionType.sideMenuToggle,
  };
}

export {appStateReducer, intialState, toggleSideMenu};
