import React, { useRef, useCallback } from 'react';
import {
  Animated,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { useEffect } from 'react';

type LoaderType = {
  showLoader: boolean;
};

const Loader = ({ showLoader }: LoaderType) => {
  /* Animation properties */
  const loadingRef = useRef(new Animated.Value(showLoader ? 1 : 0)).current;

  const loadingInterpolation = loadingRef.interpolate({
    inputRange: [0, 1],
    outputRange: [1.2, 1],
  });

  const loadingInterpolationFade = loadingRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  /* Function that executes the animation */
  const startSlideAnimation = useCallback(
    (value: number) => {
      Animated.timing(loadingRef, {
        toValue: value,
        duration: 400,
        useNativeDriver: false,
      }).start();
    },
    [loadingRef],
  );

  useEffect(() => {
    startSlideAnimation(showLoader ? 1 : 0);
  }, [showLoader, startSlideAnimation]);

  return (
    <Animated.View
      pointerEvents={showLoader ? 'auto' : 'none'}
      style={{
        ...styles.holder,
        opacity: loadingInterpolationFade,
        transform: [
          {
            scale: loadingInterpolation,
          },
        ],
      }}>
      <View style={styles.loaderHolder}>
        <Text style={styles.text}>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  holder: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderHolder: {
    width: 200,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFF',
  },
});

export { Loader };
