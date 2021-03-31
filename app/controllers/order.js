import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class OrderController extends Controller {
  @tracked resultat = 0;

  @action save(od) {
    od.save();

    var n = $('input:checked').length;
    var inputTags = document.getElementsByTagName('input');
    var checkboxCount = 0;
    for (var i = 0, length = inputTags.length; i < length; i++) {
      if (inputTags[i].type == 'checkbox') {
        checkboxCount++;
      }
    }
    this.resultat = (n / checkboxCount) * 100;
    console.log(this.resultat);
  }
}
