import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { AnimatedHolder } from '@src/components';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <AnimatedHolder outputRangeFirst={20} duration={400} delay={200}>
          <Text>Home</Text>
        </AnimatedHolder>
      </View>
    </SafeAreaView>
  );
};

export { Home };
