import { helper } from '@ember/component/helper';

export default helper(function total(params/*, hash*/) {
  let [code, total]=params;
  switch (code){
    case 'B22':
      return total+total*0.05;
    case 'AZ':
      return total+total*0.01;
    case 'UBOAT':
      return total+total*0.02;
  }
  return 'NaN';
});
