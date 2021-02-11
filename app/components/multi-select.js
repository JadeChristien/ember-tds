import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = [];
  selected = [];
  id = 'id';

  constructor() {
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  @action
  change(event) {
    let select = event.target;
    // donner à chaque élément un identifiant
    var selectedIds = [...select.selectedOptions].map(option => option.value);
    // double filtrage pour afficher la liste des éléments sélectionnés
    if (this.args.onChange) {
      // ids des éléments sélectionnés
      this.args.onChange(this.elements.filter(elm => selectedIds.filter(e => e === elm[this.id]).length > 0));
    }
  }
}
