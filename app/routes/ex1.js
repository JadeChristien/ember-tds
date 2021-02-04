import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class Ex1Route extends Route {
  tableau;
  i;

  @action
  model(ex) {
    console.log('save');

    // Transformer le this.content en string
    var mot = ex.toString();
    // Séparer le content a chaque espace rencontré
    var reg = new RegExp(' ');
    this.tableau = mot.split(reg);
    // Afficher le tableau dans la console pour regarder si tout est ok
    console.table(this.tableau);

    // Voir le tableau dans la console => la variable tableau récupère bien le contenu de content
    var long = this.tableau.length;
    for (this.i = 0; this.i < long; this.i++) {
      console.log(this.tableau[this.i]);
    }

    // Afficher une liste de tous les mots du content => ne marche pas
    return [
      { items: this.tableau[0] },
      { items: this.tableau[1] },
      { items: this.tableau[2] },
    ];
  }

}
