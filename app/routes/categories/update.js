import Route from '@ember/routing/route';

export default class CategoriesUpdateRoute extends Route {
  renderTemplate() {
    this.render('categories.add');
  }
}
