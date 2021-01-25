import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

let MAX = 100;

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info = '100';
  @tracked enregistre;
  @tracked visible = false;

  @action
  compte() {
    this.info = MAX - this.content.valueOf().length;
    this.visible = true;
  }

  @action
  clear() {
    this.content = '';
    this.info = MAX;
    this.visible = false;
  }

  @action
  save() {
    this.enregistre = !this.enregistre;
    this.visible = true;
  }

  @action
  update() {}
}
