import {Animated, Text} from 'react-native';
import React from 'react';

export default function Header({
  animatedHeaderValue,
}: {
  animatedHeaderValue: Animated.Value;
}) {
  const maxHeight = 100;
  const minHeight = 20;
  const scrollDistance = maxHeight - minHeight;

  const animatedHeaderHeight = animatedHeaderValue.interpolate({
    inputRange: [0, scrollDistance],
    outputRange: [maxHeight, minHeight],
    // outputRange: [minHeight, maxHeight],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        backgroundColor: 'pink',
        height: animatedHeaderHeight,
        top: 0,
        left: 0,
        width: '100%',
        marginBottom: 200,
      }}>
      <Text>This is sticky header</Text>
    </Animated.View>
  );
}
