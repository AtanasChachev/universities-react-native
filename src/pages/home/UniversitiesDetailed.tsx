import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@src/models/store/store';
import { ScrollView } from 'react-native';
import { DetailedHero, DetailedFixedHeader } from '@src/components';
import { universityMockUpHTMLData } from '@src/config/mockup-data';
import { RenderHTMLComponent } from '@src/components';
import { updateFavoriteUniversity } from '@src/store/actions/universities';

const UniversitiesDetailed = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { current } = useSelector((store: Store) => store.universities);
  const [isScrollingDown, updateIsScrollingDown] = useState(false);
  const [scrollingOffset, updateScrollingOffset] = useState(0);

  const detectScrollDirection = useCallback(
    event => {
      const currentOffset = event.nativeEvent.contentOffset.y;

      updateIsScrollingDown(
        currentOffset > scrollingOffset && scrollingOffset > 0,
      );
      updateScrollingOffset(currentOffset);
    },
    [scrollingOffset],
  );

  return (
    <>
      <DetailedFixedHeader
        pointerEvents={isScrollingDown ? 'none' : 'auto'}
        name={current?.name}
        animatePropState={!isScrollingDown ? 1 : 0}
        onGoBack={() => navigation.goBack()}
      />

      <ScrollView
        scrollEventThrottle={16}
        onScroll={event => detectScrollDirection(event)}>
        {current && current.image && (
          <DetailedHero
            url={current.web_pages[0]}
            image={current.image}
            likes={current.likes}
            isUniversityLiked={current.isLiked}
            onPress={(action: string) =>
              dispatch(updateFavoriteUniversity(action, current))
            }
          />
        )}

        <RenderHTMLComponent html={universityMockUpHTMLData} />
      </ScrollView>
    </>
  );
};

export { UniversitiesDetailed };
