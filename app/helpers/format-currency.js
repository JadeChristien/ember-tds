import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params/*, hash*/) {
  let [value, symbol]=params;
  return value+',00 '+symbol;
});