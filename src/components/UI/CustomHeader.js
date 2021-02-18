import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Dimensions,
  Picker,
  AsyncStorage,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {dynamicSize, getFontSize} from '../../navigation/dynamicSize';

import Images from '../../assets';

const {width, height} = Dimensions.get('window');
const Drawer = createDrawerNavigator();
const ScreenWidth = Dimensions.get('window').width;

class CustomHeader extends React.Component {
  static navigationOptions = {header: null};
  constructor(props) {
    super(props);
    this.state = {
      datacity: [],
      arrayCity: [],
      selected: 'delhi',
      cityId: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
          <TextInput
            style={styles.input}
            value={this.props.inputState}
            onChangeText={this.props.textChangeHandler}
            onBlur={this.props.lostFocusHandler}
            maxLength={this.props.maxNumber}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.search}
              style={{height: 15, width: 15, marginLeft: 10}}
            />
            <Image
              source={Images.notification}
              style={{height: 15, width: 15, marginLeft: 10}}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  city: {
    color: '#000',
    fontSize: 18,
  },

  textInputStyle: {
    flex: 1,
    height: 45,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    margin: 10,
    backgroundColor: '#F2F2F2',
    height: dynamicSize(50),
    fontSize: getFontSize(16),
  },
  errorText: {
    color: 'white',
    fontSize: dynamicSize(13),
    textAlign: 'justify',
  },

  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
    color: '#999',
  },
  input: {
    width: '80%',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    fontFamily: 'open-sans',
    color: 'red',
    fontSize: 13,
  },

  dropdown: {
    // width: 'auto',
    // height: 'auto',
    // flexDirection: 'row',
  },
});
export default CustomHeader;
