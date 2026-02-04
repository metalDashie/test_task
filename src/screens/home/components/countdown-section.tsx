import React from 'react';
import { View } from 'react-native';
import { styles } from './countdown-section.styles';
import { useCountdown } from '../../../shared/hooks';
import { Title1 } from '../../../shared/components/typography';
import { formatTime } from '../../../shared/formatters/time';
import { Button } from '../../../shared/components/buttons';

export const CountdownSection = () => {
  const { timeLeft, isRunning, start, pause, reset } = useCountdown();

  return (
    <View>
      <Title1 text="Countdown Timer" />
      <Title1 text={formatTime(timeLeft)} />
      <View style={styles.countdownButtonsContainer}>
        <Button
          title="Start"
          onPress={start}
          disabled={isRunning || !timeLeft}
        />
        <Button title="Pause" onPress={pause} disabled={!isRunning} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
};
