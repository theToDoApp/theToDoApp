import {StyleSheet} from 'react-native';
import {Colors} from '../../assets';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.background,
    position: 'absolute',
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 1000,
    overflow: 'hidden',
  },
});

export default styles;
