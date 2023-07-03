import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {StyleSheet, View} from 'react-native';
import MyButton from './MyButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface INumPad {
  displayItem: string[];
  setDisplayItem: React.Dispatch<React.SetStateAction<string[]>>;
}

type DisplayListType = {
  value: string;
  isOperator?: boolean;
  icon?: any;
  isEqualsToButton?: boolean;
}[][];

const displayList: DisplayListType = [
  [
    {
      value: 'C',
      isOperator: true,
    },
    {
      value: '<-',
      isOperator: true,
      icon: <FeatherIcon name="delete" size={30} />,
    },
    {
      value: '%',
      isOperator: true,
      icon: <Icon name="percentage" size={25} />,
    },
    {
      value: '/',
      isOperator: true,
      icon: <Icon name="divide" size={25} />,
    },
  ],
  [
    {
      value: '7',
    },
    {
      value: '8',
    },
    {
      value: '9',
    },
    {
      value: 'x',
      isOperator: true,
      icon: <EntypoIcon name="cross" size={35} />,
    },
  ],
  [
    {
      value: '4',
    },
    {
      value: '5',
    },
    {
      value: '6',
    },
    {
      value: '-',
      isOperator: true,
      icon: <Icon name="minus" size={25} />,
    },
  ],
  [
    {
      value: '1',
    },
    {
      value: '2',
    },
    {
      value: '3',
    },
    {
      value: '+',
      isOperator: true,
      icon: <Icon name="plus" size={25} />,
    },
  ],
  [
    {
      value: '00',
    },
    {
      value: '0',
    },
    {
      value: '.',
    },
    {
      value: '=',
      isOperator: false,
      isEqualsToButton: true,
    },
  ],
];

export default function Numpad({displayItem, setDisplayItem}: INumPad) {
  return (
    <>
      {displayList.map((item, index) => (
        <View style={styles.rowContainer} key={index}>
          {item.map(({value, icon, isOperator, isEqualsToButton}) => (
            <MyButton
              key={value}
              isOperator={isOperator}
              value={value}
              isEqualsToButton={isEqualsToButton}
              {...{displayItem, setDisplayItem}}>
              {icon ? icon : value}
            </MyButton>
          ))}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
