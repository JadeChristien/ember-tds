import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class Step2Route extends Route {

  model() {
    return this.modelFor('step1');
  }

  @action
  etapePrecedente(){
    this.transitionTo('step1');
  }

}
