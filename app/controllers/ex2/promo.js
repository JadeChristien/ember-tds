import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex2PromoController extends Controller {
  @tracked elm;
  @tracked checked;

  @action lienRemise(){
    this.checked = !this.checked;
    console.log(this.elm);

    if (this.checked===true){
      if (this.elm === 'B22' || this.elm === 'AZ' || this.elm === 'UBOAT'){
        console.log('succes');
      }
    }

  }

}
