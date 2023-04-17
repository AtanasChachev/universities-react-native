import { SafeAreaView, View, Text } from 'react-native';
import SwitchToggle from '@src/components/SwitchToggle';
import { styles } from './styles';
import { useSettings } from './useSettings';

const Settings = (): JSX.Element => {
  const { storeTheme, theme, handleOnValueChange } = useSettings();

  return (
    <SafeAreaView
      style={{ ...styles.holder, backgroundColor: theme.background }}>
      <View style={styles.switchOuterHolder}>
        <View
          style={{
            ...styles.switchHolder,
            borderBottomColor: theme.iconInactive,
          }}>
          <Text style={{ ...styles.switchText, color: theme.text }}>
            Dark Theme
          </Text>

          <SwitchToggle
            value={storeTheme === 'dark'}
            onValueChange={handleOnValueChange}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
