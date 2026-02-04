import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import {
  CountdownSection,
  PressAndHoldSection,
  DebounceSection,
} from './components';
import { DividerHorizontal } from '../../shared/components/dividers';
import { styles } from './screen.styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.screenContent}>
        <CountdownSection />
        <DividerHorizontal style={styles.divider} />
        <DebounceSection />
        <DividerHorizontal style={styles.divider} />
        <PressAndHoldSection />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
