import { StyleSheet } from 'react-native';
import { MAIN_THEME } from '../../shared/constants';

export const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: MAIN_THEME.backgroundPrimary },
  screenContent: {
    paddingHorizontal: 16,
  },
  divider: {
    marginVertical: 16,
  },
});
