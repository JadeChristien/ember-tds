import { helper } from '@ember/component/helper';

export default helper(function nbItemsIncluded(params/*, hash*/) {
  let [number]=params;
  if(number===0){
    return 'Aucun produit à inclure';
  }else if(number===1){
    return number+' produit inclus';
  }else {
    return number+' produits inclus';
  }
});
