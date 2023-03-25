import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets';

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    color: Colors.textGrey,
    marginLeft: 20,
  },
});

export default styles;
