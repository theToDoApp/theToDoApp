import React from 'react';
import {View} from 'react-native';

import {ScreenRootView} from '../../components';
import Header from './header';
import styles from './index.style';

// import {useNavigation} from '@react-navigation/native';

// import {HomeScreenNavigationProp} from '../../types';

const Home = () => {
  // const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScreenRootView>
      <View style={styles.root}>
        <Header />
      </View>
    </ScreenRootView>
  );
};

export default Home;
