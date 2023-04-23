import { ScrollView } from 'react-native';
import DetailedHero from '@src/components/Universities/DetailedHero';
import DetailedFixedHeader from '@src/components/Universities/DetailedFixedHeader';
import RenderHTML from '@src/components/RenderHTML';
import { universityMockUpHTMLData } from '@src/config/mockup-data';
import { useUniversitiesDetailed } from './useUniversitiesDetailed';
import { UniversitiesDetailedProps } from './types';

const UniversitiesDetailed = ({
  route,
  navigation,
}: UniversitiesDetailedProps): JSX.Element => {
  const {
    university,
    isScrollingDown,
    handleDetailedHeroPress,
    detectScrollDirection,
    handleOnBack,
  } = useUniversitiesDetailed({ route, navigation });

  return (
    <>
      <DetailedFixedHeader
        pointerEvents={isScrollingDown ? 'none' : 'auto'}
        name={university?.name}
        animatePropState={!isScrollingDown ? 1 : 0}
        onGoBack={handleOnBack}
      />

      <ScrollView scrollEventThrottle={16} onScroll={detectScrollDirection}>
        {university && university.image && (
          <DetailedHero
            url={university.web_pages[0]}
            image={university.image}
            likes={university.likes}
            isUniversityLiked={university.isLiked}
            onPress={handleDetailedHeroPress}
          />
        )}

        <RenderHTML html={universityMockUpHTMLData} />
      </ScrollView>
    </>
  );
};

export default UniversitiesDetailed;
