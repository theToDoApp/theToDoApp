import React, {useEffect} from 'react';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import styles from './index.style';
import useSideMenuToggle from '../../hooks/useSideMenuToggle';
import SideMenuHeader from './SideMenuHeader';

const SideMenu = () => {
  const width = useSharedValue(0);
  const [isOpened] = useSideMenuToggle();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: `${width.value}%`,
      paddingLeft: width.value * 0.2,
      paddingRight: width.value * 0.2,
    };
  });

  useEffect(() => {
    width.value = withTiming(isOpened ? 100 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

  return (
    <Animated.View style={[styles.root, animatedStyles]}>
      <SideMenuHeader
        name="Ajaya Mati"
        image="https://www.kasandbox.org/programming-images/avatars/purple-pi.png"
        title="Project Manager"
      />
    </Animated.View>
  );
};

export default SideMenu;
