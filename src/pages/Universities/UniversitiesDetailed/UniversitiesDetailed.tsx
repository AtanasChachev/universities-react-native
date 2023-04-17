import { ScrollView } from 'react-native';
import DetailedHero from '@src/components/Universities/DetailedHero';
import DetailedFixedHeader from '@src/components/Universities/DetailedFixedHeader';
import RenderHTML from '@src/components/RenderHTML';
import { universityMockUpHTMLData } from '@src/config/mockup-data';
import { useUniversitiesDetailed } from './useUniversitiesDetailed';

const UniversitiesDetailed = ({ navigation }: any): JSX.Element => {
  const {
    isScrollingDown,
    current,
    handleDetailedHeroPress,
    detectScrollDirection,
    handleOnBack,
  } = useUniversitiesDetailed({ navigation });

  return (
    <>
      <DetailedFixedHeader
        pointerEvents={isScrollingDown ? 'none' : 'auto'}
        name={current?.name}
        animatePropState={!isScrollingDown ? 1 : 0}
        onGoBack={handleOnBack}
      />

      <ScrollView scrollEventThrottle={16} onScroll={detectScrollDirection}>
        {current && current.image && (
          <DetailedHero
            url={current.web_pages[0]}
            image={current.image}
            likes={current.likes}
            isUniversityLiked={current.isLiked}
            onPress={handleDetailedHeroPress}
          />
        )}

        <RenderHTML html={universityMockUpHTMLData} />
      </ScrollView>
    </>
  );
};

export default UniversitiesDetailed;
