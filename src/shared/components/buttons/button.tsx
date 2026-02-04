import React, { FC } from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import {
  ButtonColorVariantsEnum,
  ButtonFormVariantsEnum,
  getButtonDefaultStyles,
} from './button.styles.ts';

interface IProps
  extends Pick<
    TouchableOpacityProps,
    'onPress' | 'onPressIn' | 'onPressOut' | 'style' | 'disabled'
  > {
  title: string;
  variant?: ButtonFormVariantsEnum;
  variantColor?: ButtonColorVariantsEnum;
}
export const Button: FC<IProps> = ({
  title,
  variant = ButtonFormVariantsEnum.FILLED,
  variantColor = ButtonColorVariantsEnum.PRIMARY,
  ...props
}) => {
  const ACTIVE_OPACITY = 0.85;
  const styles = getButtonDefaultStyles(variant, variantColor, props.disabled);

  const buttonCombinedStyle = [styles.button, props.style];

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      style={buttonCombinedStyle}
      {...props}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
