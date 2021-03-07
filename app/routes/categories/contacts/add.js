import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesContactsAddRoute extends Route {
  model() {
    return {};
  }

  @action
  save(categorie) {
    categorie.save().then(() => this.transitionTo('contacts'));
  }
}
