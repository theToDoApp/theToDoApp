import {useContext} from 'react';
import {
  AppStateContext,
  AppStateDispatchContext,
} from '../contexts/AppStateContext';
import {toggleSideMenu} from '../reducers/appStatereducers';

const useSideMenuToggle = (): [boolean, () => void] => {
  const {isSideMenuOpened} = useContext(AppStateContext);
  const dispatch = useContext(AppStateDispatchContext);

  const toggle = () => {
    dispatch(toggleSideMenu());
  };

  return [isSideMenuOpened, toggle];
};

export default useSideMenuToggle;
