import React, {useEffect} from 'react';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import styles from './index.style';
import useSideMenuToggle from '../../hooks/useSideMenuToggle';

const SideMenu = () => {
  const width = useSharedValue(0);
  const [isOpened] = useSideMenuToggle();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: `${width.value}%`,
    };
  });

  useEffect(() => {
    width.value = withSpring(isOpened ? 100 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

  return <Animated.View style={[styles.root, animatedStyles]} />;
};

export default SideMenu;
