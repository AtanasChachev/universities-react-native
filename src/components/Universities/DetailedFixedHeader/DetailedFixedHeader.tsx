import { View, TouchableOpacity, Text } from 'react-native';
import AnimatedHolder from '@src/components/AnimatedHolder';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import { DetailedFixedHeaderProps } from './types';
import { ThemeColors } from '@src/styles/colors';

const DetailedFixedHeader = ({
  pointerEvents,
  animatePropState,
  name,
  onGoBack,
}: DetailedFixedHeaderProps): JSX.Element => {
  const insets = useSafeAreaInsets();
  const handleOnGoBack = (): void => onGoBack();

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
          <TouchableOpacity style={styles.backButton} onPress={handleOnGoBack}>
            <Icon
              size={26}
              color={ThemeColors.background}
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

export default DetailedFixedHeader;
