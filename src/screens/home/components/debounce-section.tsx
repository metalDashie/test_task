import React, { useState } from 'react';
import { View } from 'react-native';
import { Title1 } from '../../../shared/components/typography';
import { useDebounce } from '../../../shared/hooks';
import { Button } from '../../../shared/components/buttons';
import { styles } from './debounce-section.styles';

export const DebounceSection = () => {
  const DEBOUNCE_DELAY = 2000;

  const [counter, setCounter] = useState(0);

  const { callWithDebounce } = useDebounce(
    () => setCounter(prevCount => prevCount + 1),
    DEBOUNCE_DELAY,
  );

  const formattedCounterText = `Count: ${counter}`;

  return (
    <View>
      <Title1 text="Debounced Counter" />
      <Title1 text={formattedCounterText} />
      <View style={styles.countdownButtonsContainer}>
        <Button title="Increment" onPress={callWithDebounce} />
      </View>
    </View>
  );
};
