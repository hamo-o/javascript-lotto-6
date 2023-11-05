import { Console } from '@woowacourse/mission-utils';
import Validate from './Validate.js';

const Input = {
  async getLottoPrice() {
    try {
      const price = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      Validate.checkPurchaseAmount(price);
      return +price;
    } catch (error) {
      Console.print(error.message);
      return this.getLottoPrice();
    }
  },
  async getLottoNumber() {
    try {
      const numbers = await Console.readLineAsync(
        '당첨 번호를 입력해 주세요.\n'
      );
      Validate.checkDuplicateNumber(numbers.split(','));
      return numbers.split(',').map((number) => Number(number));
    } catch (error) {
      Console.print(error.message);
      return this.getLottoNumber();
    }
  },
  async getLottoBonusNumber() {
    try {
      const number = await Console.readLineAsync(
        '보너스 번호를 입력해 주세요.\n'
      );
      return Number(number);
    } catch (error) {
      Console.print(error.message);
      return this.getLottoBonusNumber();
    }
  },
};

export default Input;
