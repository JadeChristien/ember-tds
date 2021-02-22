import Route from '@ember/routing/route';

export default class CategoriesRoute extends Route {
  //model hook
  model() {
    return this.store.findAll('categorie');
  }
}
