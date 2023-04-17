import { useState } from 'react';
import { SwitchToggleProps } from './types';

interface Return {
  toggleValue?: boolean;
  handleValueChange: (value: boolean) => void;
}

export const useSwitchToggle = ({
  value,
  onValueChange,
}: SwitchToggleProps): Return => {
  const [toggleValue, updateToggleValue] = useState(value);

  const handleValueChange = (switchValue: boolean): void => {
    updateToggleValue(switchValue);
    onValueChange(switchValue);
  };

  return {
    toggleValue,
    handleValueChange,
  };
};
