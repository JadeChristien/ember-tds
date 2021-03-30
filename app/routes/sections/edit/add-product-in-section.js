import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsEditAddProductInSectionRoute extends Route {

  model(){
    return { section: this.modelFor('sections.edit') };
  }

  @action
  save(data) {
    let product = this.store.createRecord('product', data);
    product.save().then(
      ()=>this.transitionTo("sections.edit")
    );
  }

}
