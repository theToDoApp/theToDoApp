import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

import styles from './index.style';

const ScreenRootView = ({children}: PropsWithChildren) => (
  <SafeAreaView style={styles.root}>{children}</SafeAreaView>
);

export default ScreenRootView;
