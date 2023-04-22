import { useTheme } from '@src/hooks/useTheme';
import { Switch } from 'react-native';
import { SwitchToggleProps } from './types';
import { useSwitchToggle } from './useSwitchToggle';

const SwitchToggle = ({
  value,
  onValueChange,
}: SwitchToggleProps): JSX.Element => {
  const theme = useTheme();
  const { toggleValue, handleValueChange } = useSwitchToggle({
    value,
    onValueChange,
  });

  return (
    <Switch
      ios_backgroundColor={theme.iconInactive}
      onValueChange={handleValueChange}
      value={toggleValue}
    />
  );
};

export default SwitchToggle;
