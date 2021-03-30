import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class OrderController extends Controller {
  @action
  isprepared(idProduct) {
    this.store.query('product', {
      filter: { id: idProduct },
    });
    console.log(idProduct);
  }
}
