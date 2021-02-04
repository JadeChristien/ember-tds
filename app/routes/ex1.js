import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class Ex1Route extends Route {
  // modèle Hook
  model() {
    return { items: [] };
  }

  @action
  save2(content) {
    console.log('save');
    let model = this.modelFor(this.routeName);
    model.items = content.split('\n');
    this.transitionTo('ex1b');
  }
}
