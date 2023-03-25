import React from 'react';
import {Text, View} from 'react-native';
import VectorIcon from 'react-native-vector-icons/Ionicons';

import styles from './index.style';
import {Routes, ScreenDetails} from '../../../constants/Routes';
import {Colors} from '../../../assets';

const SideMenuListItem = ({title, icon}: ScreenDetails) => (
  <View style={styles.listItemContainer}>
    <VectorIcon color={Colors.textGrey} name={icon} size={25} />
    <Text style={styles.title}>{title}</Text>
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
        />
      ))}
    </View>
  );
};

export default SideMenuList;
