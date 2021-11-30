import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeColors } from '@src/styles/colors';
import { AnimatedHolder } from '@src/components';
import { universityMockUpHTMLData } from '@src/config/mockup-data';
import { RenderHTMLComponent } from '@src/components';
import LinearGradient from 'react-native-linear-gradient';

const UniversitiesDetailed = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const { current } = useSelector((store: Store) => store.universities);
  const [isScrollingDown, updateIsScrollingDown] = useState(false);
  const [scrollingOffset, updateScrollingOffset] = useState(0);

  useEffect(() => {
    console.log(current);
  }, [current]);

  const detectScrollDirection = useCallback(
    event => {
      var currentOffset = event.nativeEvent.contentOffset.y;
      updateIsScrollingDown(
        currentOffset > scrollingOffset && scrollingOffset > 0,
      );
      updateScrollingOffset(currentOffset);
    },
    [scrollingOffset],
  );

  return (
    <>
      <AnimatedHolder
        pointerEvents={isScrollingDown ? 'none' : 'auto'}
        duration={400}
        outputRangeFirst={-40}
        delay={0}
        animatePropState={!isScrollingDown ? 1 : 0}
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
              onPress={() => navigation.goBack()}>
              <Icon
                size={26}
                color={ThemeColors.colorWhite}
                name="chevron-back"
              />

              <Text style={styles.headerText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.headerText}>{current?.name}</Text>
          </View>
        </View>
      </AnimatedHolder>

      <ScrollView
        scrollEventThrottle={16}
        onScroll={event => detectScrollDirection(event)}>
        {current && current.image && (
          <ImageBackground source={current?.image} style={styles.image} />
        )}

        <View style={styles.contentHolder}>
          <RenderHTMLComponent html={universityMockUpHTMLData} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 240,
  },
  animatedHolder: { zIndex: 10 },
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
  headerText: {
    fontSize: 16,
    lineHeight: 24,
    color: ThemeColors.colorWhite,
    maxWidth: 240,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 14,
    zIndex: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  contentHolder: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export { UniversitiesDetailed };
