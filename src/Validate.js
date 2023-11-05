const Validate = {
  checkPurchaseAmount(price) {
    if (price < 1000) {
      throw new Error('[ERROR] 구입 금액은 최소 1000원 이상이어야 합니다.');
    } else if (price % 1000) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위여야 합니다.');
    }
  },
  checkDuplicateNumber(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다');
    }
  },
};
export default Validate;
