import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class Ex1Route extends Route {
  tableau;
  i;

  @action
  model(ex) {
    console.log('save');
    var mot = 'aaaaaaa eeeeeee rt';
    var reg = new RegExp(' ');
    this.tableau = mot.split(reg);
    console.table(this.tableau);
    console.table(ex);

    var long = this.tableau.length;
    for (this.i = 0; this.i < long; this.i++) {
      console.log(this.tableau[this.i]);
    }
    return [
      { items: this.tableau[0] },
      { items: this.tableau[1] },
      { items: this.tableau[2] },
      { items: this.tableau[3] },
    ];
  }

}
