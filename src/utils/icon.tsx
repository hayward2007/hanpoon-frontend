import React from 'react';
import {Text, TextStyle} from 'react-native';
import Color from './color';

export interface IconProps {
  icon: string;
  size?: number;
  fill?: boolean;
  weight?: TextStyle['fontWeight'];
  color?: string;
}

export const Icon = ({
  icon,
  size = 24,
  fill = false,
  weight = '400',
  color = Color.black,
}: IconProps): JSX.Element => {
  return (
    <Text
      style={{
        // import font as PostScript
        fontFamily: fill
          ? 'MaterialSymbolsRounded-Filled'
          : 'MaterialSymbolsRounded-Normal',
        fontSize: 24,
        color: color,
        width: size,
        height: size,
        fontWeight: weight,
      }}>
      {icon}
    </Text>
  );
};
