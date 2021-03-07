import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesContactsUpdateRoute extends Route {

  model(params) {
    return params.contact_id;
  };

  renderTemplate() {
    this.render('contacts.add');
  }

  @action
  save(contact){
    contact.save().then(
      ()=>{this.transitionTo('contacts');}
    );
  }
}
