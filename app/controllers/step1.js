import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
  //éléments initiaux qui sont dans la 1ere liste
  dispoItems=[];
  //éléments initiaux qui sont dans la 2nd liste
  includedItems=[];
  //éléments sélectionnés dans la 1ere liste
  @tracked dispoItems_=[];
  //éléments sélectionnés dans la 2nd liste
  @tracked includedItems_=[];

  //Affecte elements à dispoItems_, action déclenchée sur le @onChange de la liste des dispoItems
  @action
  changeDispo(elements){
    this.dispoItems_=elements;
  }

  //Affecte elements à includedItems_, action déclenchée sur le @onChange de la liste des includedItems
  @action
  changeIncluded(elements){
    this.includedItems_=elements;
  }

  //Ajoute depuis source les éléments what à dest
  @action
  add(source, dest, what){
    dest.pushObjects(what);
    source.removeObjects(what);
  }

  //Retire depuis source les éléments what et les ajoute à dest
  @action
  remove(source, dest, what){
    dest.pushObjects(what);
    source.removeObjects(what);
  }

}
