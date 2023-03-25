import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import VectorIcon from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../../assets';
import styles from './index.style';
import useSideMenuToggle from '../../../hooks/useSideMenuToggle';

interface SideMenuHeaderProps {
  name: string;
  image: string;
  title?: string;
}

const SideMenuHeader = ({name, image, title}: SideMenuHeaderProps) => {
  const [_, toggle] = useSideMenuToggle();

  return (
    <View style={styles.root}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => toggle()}
        style={styles.closeIconContainer}>
        <VectorIcon size={24} color={Colors.white} name="ios-chevron-back" />
      </TouchableOpacity>
    </View>
  );
};

export default SideMenuHeader;
