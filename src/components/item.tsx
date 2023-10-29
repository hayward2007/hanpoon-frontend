import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@utils/icon';
import Color from '@utils/color';
import border from '@utils/border';
import {SUITVariable} from '@utils/text';

const Item = ({
  name,
  price,
  image,
  count,
  counter = false,
}: {
  name: string;
  price: number;
  image: string;
  count?: number;
  counter?: boolean;
}) => {
  const style = StyleSheet.create({
    Item: {
      display: 'flex',
      flexDirection: 'row',
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: Color.white,
    },
    ItemInfo: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    ItemTitle: {
      fontFamily: SUITVariable.SemiBold,
      fontSize: 16,
      marginVertical: 4,
    },
    ItemPrice: {
      fontFamily: SUITVariable.Medium,
      fontSize: 16,
    },
    ItemCount: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 4,
      borderRadius: 8,
    },
    ItemCountText: {
      fontFamily: SUITVariable.Medium,
      fontSize: 16,
      width: 24,
      textAlign: 'right',
    },
    ItemImage: {
      width: 96,
      height: 96,
    },
  });
  return (
    <View style={[style.Item, border.default]}>
      <TouchableOpacity>
        <Image style={style.ItemImage} source={{uri: image}} />
      </TouchableOpacity>
      <View style={style.ItemInfo}>
        <View>
          <Text style={style.ItemTitle}>{name}</Text>
          <Text style={style.ItemPrice}>{`${price} ₩`}</Text>
        </View>
        {counter && (
          <TouchableOpacity>
            <View style={[style.ItemCount, border.default]}>
              <Text style={style.ItemCountText}>{count}</Text>
              <Icon icon="arrow_drop_down" />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Item;
