import React from 'react';
import { View } from 'react-native';
import { Title1 } from '../../../shared/components/typography';
import { usePressAndHold } from '../../../shared/hooks';
import {
  Button,
  ButtonColorVariantsEnum,
} from '../../../shared/components/buttons';
import { styles } from './press-and-hold-section.styles';

export const PressAndHoldSection = () => {
  const { isHeld, onPressIn, onPressOut } = usePressAndHold();

  const buttonVariant = isHeld
    ? ButtonColorVariantsEnum.SECONDARY
    : ButtonColorVariantsEnum.PRIMARY;

  return (
    <View>
      <Title1 text="Press and hold section" />
      <View style={styles.countdownButtonsContainer}>
        <Button
          title="Press and hold"
          variantColor={buttonVariant}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        />
      </View>
    </View>
  );
};
