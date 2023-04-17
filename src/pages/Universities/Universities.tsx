import { SafeAreaView } from 'react-native';
import AnimatedHolder from '@src/components/AnimatedHolder';
import VirtualizedCardsList from '@src/components/Universities/VirtualizedCardList';
import { useUniversities } from './useUniversities';

const Universities = ({ navigation }: any): JSX.Element => {
  const { theme, universities, handleCardPress } = useUniversities({
    navigation,
  });

  return (
    <SafeAreaView style={{ backgroundColor: theme.background }}>
      <AnimatedHolder
        shAnimateOnInit={true}
        outputRangeFirst={40}
        delay={400}
        duration={400}>
        <VirtualizedCardsList
          universities={universities}
          onPress={handleCardPress}
        />
      </AnimatedHolder>
    </SafeAreaView>
  );
};

export default Universities;
