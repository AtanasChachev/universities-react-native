import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { AnimatedHolder } from '@src/components';
import { ThemeColors } from '@src/styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  pointerEvents:
    | Animated.Value
    | Animated.AnimatedInterpolation
    | 'box-none'
    | 'none'
    | 'box-only'
    | 'auto'
    | undefined;
  animatePropState: number;
  name: string | undefined;
  onGoBack: () => void;
};

const DetailedFixedHeader = ({
  pointerEvents,
  animatePropState,
  name,
  onGoBack,
}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <AnimatedHolder
      pointerEvents={pointerEvents}
      duration={400}
      outputRangeFirst={-40}
      delay={0}
      animatePropState={animatePropState}
      styles={styles.animatedHolder}>
      <View
        style={{
          ...styles.header,
          paddingTop: insets.top + 10,
        }}>
        <LinearGradient
          style={styles.backdrop}
          colors={['rgba(0, 0, 0, .8)', 'rgba(0, 0, 0, 0)']}
        />

        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => onGoBack()}>
            <Icon
              size={26}
              color={ThemeColors.colorWhite}
              name="chevron-back"
            />

            <Text style={styles.headerText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.headerText}>{name}</Text>
        </View>
      </View>
    </AnimatedHolder>
  );
};

const styles = StyleSheet.create({
  animatedHolder: {
    zIndex: 10,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 14,
    zIndex: 20,
  },
  headerText: {
    fontSize: 16,
    lineHeight: 24,
    color: ThemeColors.colorWhite,
    maxWidth: 240,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    zIndex: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export { DetailedFixedHeader };
