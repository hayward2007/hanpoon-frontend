import {SearchResultType} from '@apis/search';
import {DetailProps} from './Detail';

type SearchStackParamList = {
  search: undefined;
  cart: undefined;
  detail: SearchResultType;
  goods: DetailProps;
};

export default SearchStackParamList;
