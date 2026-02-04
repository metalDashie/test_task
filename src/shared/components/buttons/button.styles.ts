import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { MAIN_THEME } from '../../constants';

export enum ButtonFormVariantsEnum {
  FILLED,
  OUTLINED,
}

export enum ButtonColorVariantsEnum {
  PRIMARY,
  SECONDARY,
}

export const getButtonDefaultStyles = (
  variant: ButtonFormVariantsEnum,
  variantColor: ButtonColorVariantsEnum,
  disabled?: boolean,
) => {
  let buttonColor: string, textColor: string;

  switch (variantColor) {
    case ButtonColorVariantsEnum.PRIMARY:
      buttonColor = MAIN_THEME.buttonBackgroundPrimary;
      textColor = MAIN_THEME.buttonTextColorPrimary;
      break;

    case ButtonColorVariantsEnum.SECONDARY:
      buttonColor = MAIN_THEME.buttonBackgroundSecondary;
      textColor = MAIN_THEME.buttonTextColorSecondary;
      break;
  }

  const buttonStyles: {
    buttonStyle: ViewStyle;
    textStyle: TextStyle;
  } = {
    buttonStyle: {
      opacity: disabled ? 0.5 : 1,
    },
    textStyle: {
      fontSize: 18,
    },
  };

  switch (variant) {
    case ButtonFormVariantsEnum.FILLED:
      buttonStyles.buttonStyle = {
        ...buttonStyles.buttonStyle,
        backgroundColor: buttonColor,
      };
      buttonStyles.textStyle = {
        ...buttonStyles.textStyle,
        color: textColor,
      };
      break;

    case ButtonFormVariantsEnum.OUTLINED:
      buttonStyles.buttonStyle = {
        ...buttonStyles.buttonStyle,
        borderColor: buttonColor,
        borderWidth: 1,
      };
      buttonStyles.textStyle = {
        ...buttonStyles.textStyle,
        color: buttonColor,
      };
      break;
  }

  return StyleSheet.create({
    button: {
      ...buttonStyles.buttonStyle,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 16,
    },
    text: buttonStyles.textStyle,
  });
};
