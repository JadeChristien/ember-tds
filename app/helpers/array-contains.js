import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params/*, hash*/) {
  // Regarde si un élément appartient aux items sélectionnés de la liste
  const [items, value,prop] = params;
  let id=prop ||'id'
  return items.filterBy(id,value).length > 0;
});
