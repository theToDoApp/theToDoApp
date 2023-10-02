import React, {useEffect} from 'react';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useAnimatedGestureHandler,
  runOnJS,
} from 'react-native-reanimated';
import {useWindowDimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

import styles from './index.style';
import useSideMenuToggle from '../../hooks/useSideMenuToggle';
import SideMenuHeader from './SideMenuHeader';
import SideMenuList from './SideMenuList';

const SideMenu = () => {
  const [isOpened, toggle] = useSideMenuToggle();
  const translationRatio = useSharedValue(0);
  const {width: screenWidth} = useWindowDimensions();

  const translationX = useDerivedValue(() => {
    return screenWidth * translationRatio.value;
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translationX.value}],
    };
  });

  useEffect(() => {
    translationRatio.value = withTiming(isOpened ? 1 : 0);
  }, [isOpened, translationRatio]);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: _ => {
      // context.startX = width.value;
    },
    onActive: (event, _) => {
      translationRatio.value = Math.max(-event.translationX / screenWidth, 0);
    },
    onEnd: _ => {
      if (translationRatio.value < 0.3) {
        translationRatio.value = withTiming(0);
      } else {
        translationRatio.value = withTiming(1);
        runOnJS(toggle)();
      }
    },
    onFail: _ => {
      if (translationRatio.value < 0.3) {
        translationRatio.value = withTiming(0);
      } else {
        translationRatio.value = withTiming(1);
        runOnJS(toggle)();
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.root, animatedStyles]}>
        <SideMenuHeader
          name="Ajaya Mati"
          image="https://www.kasandbox.org/programming-images/avatars/purple-pi.png"
          title="Project Manager"
        />
        <SideMenuList />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SideMenu;
