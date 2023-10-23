import axios from 'axios';

import {NAVER_CLIENT_ID, NAVER_CLIENT_SECRET} from '@env';

export type SearchResultType = {
  name: string;
  link: string;
  image: string;
  price: number;
  category: string[];
};

class SearchAPI {
  protected PATH = 'https://openapi.naver.com/v1/search/shop.json';
  protected count = 0;
  protected index = 1;
  protected current = '';
  public data: SearchResultType[] = [];

  public async search(request: string) {
    try {
      if (this.current !== request) {
        this.count = 0;
        this.index = 1;
        this.data = [];
        this.current = request;
      }

      const response = await axios.get(this.PATH, {
        params: {
          query: request,
          display: 100,
          sort: 'sim',
          start: this.index,
          exclude: 'used:rental',
        },
        headers: {
          'X-Naver-Client-Id': NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
        },
      });

      response.data.items
        .sort((a: any, b: any) => (a.lprice < b.lprice ? -1 : 1))
        .map((item: any) => {
          this.index++;
          if (item.productType === '1') {
            this.count++;
            this.data.push({
              name: item.title.replace(/(<([^>]+)>)/gi, ''),
              link: item.link,
              image: item.image,
              price: parseInt(item.lprice, 10),
              category: [item.category1, item.category2, item.category3],
            });
          }
        });

      if (this.count >= 10) {
        return this.data;
      }
      await this.search(request);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default SearchAPI;
