import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './title1.styles';

interface IProps extends Pick<TextProps, 'style'> {
  text: string;
}
export const Title1: FC<IProps> = ({ text, style }) => {
  const textStyle = [styles.text, style];
  return <Text style={textStyle}>{text}</Text>;
};
