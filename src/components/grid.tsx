// import React from 'react';
// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import Indicator from '@utils/indicator';
// import SearchAPI from '~/apis/search';

// const Grid = (navigation: any, api: SearchAPI) => {
//   const [loading, setLoading] = useState(false);
//   const onEndReached = async () => {
//     if (loading || Typing) {
//       return;
//     } else {
//       if (SearchText) {
//         setLoading(true);
//         await api.search(SearchText);
//         setLoading(false);
//       }
//     }
//   };

//   const style = StyleSheet.create({
//     Grid: {
//       flex: 1,
//       paddingHorizontal: 8,
//     },
//     GridItem: {
//       alignItems: 'center',
//       backgroundColor: Color.white,
//       borderRadius: 12,
//       display: 'flex',
//       flex: 1,
//       flexDirection: 'column',
//       gap: 12,
//       justifyContent: 'center',
//       margin: 8,
//       padding: 12,
//     },
//   });

//   return (
//     <FlatList
//       style={style.Grid}
//       data={api.data}
//       numColumns={2}
//       keyExtractor={(item, index) => index.toString()}
//       ListFooterComponent={<Indicator />}
//       onEndReached={onEndReached}
//       onEndReachedThreshold={0.9}
//       renderItem={item => {
//         return (
//           <TouchableOpacity
//             style={style.SearchResultContent}
//             onPress={() => navigation.push('detail', item.item)}>
//             <View style={[style.SearchResultItem, border.default]}>
//               <Image
//                 style={style.SearchResultImage}
//                 source={{uri: item.item.image}}
//               />
//               <View>
//                 <Text style={style.SearchResultTitle}>{item.item.name}</Text>
//                 <Text
//                   style={
//                     style.SearchResultValue
//                   }>{`${item.item.price} ₩`}</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         );
//       }}
//     />
//   );
// };
