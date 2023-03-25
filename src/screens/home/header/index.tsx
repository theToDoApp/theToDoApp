import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import VectorIcon from 'react-native-vector-icons/Ionicons';

import styles from './index.style';
import {Icon, Colors} from '../../../assets';
import useSideMenuToggle from '../../../hooks/useSideMenuToggle';

const Notification: React.FC<{hasNew?: boolean}> = ({hasNew = false}) => (
  <VectorIcon size={25} color={Colors.grey} name="ios-notifications-outline" />
);

const MenuButton = () => {
  const [_, toggle] = useSideMenuToggle();

  return (
    <TouchableOpacity
      onPress={() => {
        toggle();
      }}>
      <Image source={Icon.homeHeader} style={styles.menuImage} />
    </TouchableOpacity>
  );
};

const Header = () => (
  <View style={styles.container}>
    <MenuButton />
    <Notification />
  </View>
);

export default Header;
