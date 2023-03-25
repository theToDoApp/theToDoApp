import React from 'react';
import {Text, View} from 'react-native';
import VectorIcon from 'react-native-vector-icons/Ionicons';

import styles from './index.style';
import {Routes, ScreenDetails} from '../../../constants/Routes';
import {Colors} from '../../../assets';

interface SideMenuListItemProps {
  title: string;
  icon: string;
  isActive?: boolean;
}

const SideMenuListItem = ({
  title,
  icon,
  isActive = false,
}: SideMenuListItemProps) => (
  <View style={styles.listItemContainer}>
    <VectorIcon
      color={isActive ? Colors.textYellow : Colors.textGrey}
      name={icon}
      size={25}
    />
    <Text style={[styles.title, isActive ? styles.activeText : {}]}>
      {title}
    </Text>
  </View>
);

const SideMenuList = () => {
  return (
    <View style={styles.root}>
      {Routes.map(item => (
        <SideMenuListItem
          key={item.title}
          title={item.title}
          icon={item.icon}
          isActive={item.title === 'Dashboard'}
        />
      ))}
    </View>
  );
};

export default SideMenuList;
