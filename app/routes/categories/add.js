import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesAddRoute extends Route {
  //model hook
  model() {
    return {};
  }

  @action
  save(categorie) {
    let cat = this.store.createRecord('categorie', categorie);
    cat.save();
  }
}
