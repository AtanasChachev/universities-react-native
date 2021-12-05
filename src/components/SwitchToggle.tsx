import { useColor } from '@src/styles/colors';
import React, { useState } from 'react';
import { Switch } from 'react-native';

type Props = {
  value?: boolean;
  onValueChange: (value: boolean) => void;
};

const SwitchToggle = ({ value, onValueChange }: Props) => {
  const theme = useColor();
  const [_value, _updateValue] = useState(value);

  return (
    <Switch
      ios_backgroundColor={theme.iconInactive}
      onValueChange={switchValue => {
        _updateValue(switchValue);
        onValueChange(switchValue);
      }}
      value={_value}
    />
  );
};

export { SwitchToggle };
