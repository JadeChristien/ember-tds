import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContactsController extends Controller {
  @tracked contenu;
  @tracked datas;
  long;

  @action
  update(){
    console.log(this.contenu);
    this.long = this.contenu.length;
    this.contenu.substr(0, this.long);
  }

  get contacts() {
    return this.datas;
  }

  get deleteteds() {
    return this.datas;
  }

  get deletetedsCount() {
    return this.datas;
  }
}
