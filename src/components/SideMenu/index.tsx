import React, {useEffect} from 'react';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import {useWindowDimensions} from 'react-native';

import styles from './index.style';
import useSideMenuToggle from '../../hooks/useSideMenuToggle';
import SideMenuHeader from './SideMenuHeader';
import SideMenuList from './SideMenuList';

const SideMenu = () => {
  const [isOpened] = useSideMenuToggle();
  const width = useSharedValue(0);
  const {width: screenWidth} = useWindowDimensions();

  const translationX = useDerivedValue(() => {
    return screenWidth * width.value;
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: -translationX.value}],
    };
  });

  useEffect(() => {
    width.value = withTiming(isOpened ? 1 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

  return (
    <Animated.View style={[styles.root, animatedStyles]}>
      <SideMenuHeader
        name="Ajaya Mati"
        image="https://www.kasandbox.org/programming-images/avatars/purple-pi.png"
        title="Project Manager"
      />
      <SideMenuList />
    </Animated.View>
  );
};

export default SideMenu;
