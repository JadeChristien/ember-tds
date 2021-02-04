import { helper } from '@ember/component/helper';

export default helper(function remise(params/*, hash*/) {
  let [code, invalid, total]=params;
  switch (code){
    case 'B22':
      return total*0.05;
    case 'AZ':
      return total*0.01;
    case 'UBOAT':
      return total*0.02;
  }
  return invalid;
});
