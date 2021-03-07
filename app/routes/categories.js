import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CategoriesRoute extends Route {
  @service router;

  //model hook
  model() {
    return this.store.findAll('category');
  }

  @action
  delete(category){
    category.deleteRecord();
  }

  afterModel(model, transition){
    this.store.findAll('contact');
    if (model.length > 0 && transition.targetName === 'categories.index') {
      this.transitionTo('categories.contacts', model.get('firstObject'));
    }
  }
}
