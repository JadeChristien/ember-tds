import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesContactsRoute extends Route {
  //retourne la catégorie à afficher (correspondant à params.category_id)
  model(params) {
    return params.category_id;
  };

  //Initialise les données category et datas (contacts) du contrôleur à partir du contenu de model.
  setUpController(controller, model){
    controller.set('model', model);
  }

  //Effectue un reload du model pour recharger les données avant transition.
  willTransition(){
    return true;
  }

  //Marque un contact comme isDeleted.
  @action
  delete(contact){
    contact.deleteRecord();
  }

  //Annule la suppression des contacts
  @action
  cancelDeletion(contacts){
    contacts.forEach(
      (t)=>t.rollbackAttributes()
    )
  }

  //Effectue la suppression définitive des contacts.
  @action
  confirmDeletion(contacts){
    contacts.forEach(
      (t)=>t.save()
    )
  }

  //Effectue une transition vers le contact à modifier.
  @action
  update(category, contact){

  }

}
