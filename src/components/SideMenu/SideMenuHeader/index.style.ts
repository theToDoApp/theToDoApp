import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 12,
  },
  image: {
    width: 60,
    height: 60,
  },
  textContainer: {
    justifyContent: 'space-evenly',
    marginLeft: 20,
  },
  nameText: {
    color: Colors.white,
    fontSize: 20,
  },
  titleText: {
    color: Colors.textGrey,
    fontSize: 14,
  },
  closeIconContainer: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
