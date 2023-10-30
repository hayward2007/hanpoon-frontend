import React from 'react';
import {Text, TextStyle, View} from 'react-native';
import Color from './color';

export interface IconProps {
  icon: string;
  size?: number;
  fill?: boolean;
  weight?: TextStyle['fontWeight'];
  color?: string;
}

// export const Icon = ({
//   icon,
//   size = 24,
//   fill = false,
//   weight = '400',
//   color = Color.black,
// }: IconProps): JSX.Element => {
//   return (
//     <View
//       style={{
//         flex: 0,
//         width: size,
//         height: size,
//         overflow: 'hidden',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text
//         style={{
//           // import font as PostScript
//           fontFamily: fill
//             ? 'MaterialSymbolsRounded-Filled'
//             : 'MaterialSymbolsRounded-Normal',
//           fontSize: size,
//           fontWeight: weight,
//           color: color,
//           lineHeight: size * 1.1,
//         }}>
//         {icon}
//       </Text>
//     </View>
//   );
// };

export interface IconProps {
  icon: string;
  size?: number;
  fill?: boolean;
  weight?: TextStyle['fontWeight'];
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  size = 24,
  fill = true,
  weight = '400',
  color = Color.black,
}) => {
  return (
    <View
      style={{
        flex: 0,
        width: size,
        height: size,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          // import font as PostScript
          fontFamily: fill
            ? 'MaterialSymbolsRounded-Filled'
            : 'MaterialSymbolsRounded-Normal',
          fontSize: size,
          fontWeight: weight,
          color: color,
          lineHeight: size * 1.1,
        }}>
        {icon}
      </Text>
    </View>
  );
};
