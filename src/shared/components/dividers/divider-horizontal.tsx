import { View, ViewProps } from 'react-native';
import React, { FC } from 'react';
import { styles } from './divider-horizontal.styles.ts';

interface IProps extends Pick<ViewProps, 'style'> {}
export const DividerHorizontal: FC<IProps> = ({ style }) => {
  const dividerStyle: ViewProps['style'] = [styles.divider, style];
  return <View style={dividerStyle} />;
};
