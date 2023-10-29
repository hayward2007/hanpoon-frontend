import axios from 'axios';
import {OPENAI_API_KEY} from '@env';
import {SearchResultType} from './search';

class GPT {
  protected PATH = 'https://api.openai.com/v1/chat/completions';
  protected controller = new AbortController();
  public cancel = () => {
    console.log('canceling...');
    this.controller.abort();
  };
  public async goods(request: SearchResultType) {
    try {
      const secret = OPENAI_API_KEY;
      const response = await axios.post(
        this.PATH,
        {
          model: 'gpt-4',
          max_tokens: 200,
          messages: [
            {
              role: 'system',
              content: '너는 사용자의 쇼핑을 도와주는 인공지능 비서야',
            },
            {
              role: 'user',
              content: `${request.name} 상품의 보완재와 대체재를 부가적인 문장 또는 글 없이, 숫자와 특수기호가 포함되지 않은 상품 이름 3개를 200자 내외로
                      {
                        "complementary": ["보완재 1", "보완재 2", ...],
                        "substitute": ["대체재 1", "대체재 2", ...]
                      }
                      형식의 json 형태로 답변해`,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + secret,
          },
          signal: this.controller.signal,
        },
      );
      try {
        const result: {conplementary: []; substitute: []} = JSON.parse(
          response.data.choices[0].message.content,
        );
        return result;
      } catch (error) {
        console.log(error);
        console.log('retrying...');
        await this.goods(request);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default GPT;
