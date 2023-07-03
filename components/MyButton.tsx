import {Pressable, StyleSheet, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {handleClickEvent} from '../utils/utils';

interface IButton {
  children: ReactNode;
  isOperator?: boolean;
  isEqualsToButton?: boolean;
  value: string;
  displayItem: string[];
  setDisplayItem: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function MyButton({
  children,
  isOperator = false,
  isEqualsToButton = false,
  value,
  displayItem,
  setDisplayItem,
}: IButton) {
  return (
    <Pressable
      onPress={() => handleClickEvent({displayItem, setDisplayItem, value})}
      style={styles.button}
      android_ripple={{
        color: '#212121',
        borderless: true,
        radius: 35,
      }}>
      <Text
        style={{
          ...styles.text,
          ...{
            color: isOperator ? '#f79719' : 'white',
            backgroundColor: isEqualsToButton ? '#f79719' : 'transparent',
            paddingVertical: isEqualsToButton ? 10 : 15,
            paddingHorizontal: 20,
            borderRadius: 50,
          },
        }}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
  },
});
