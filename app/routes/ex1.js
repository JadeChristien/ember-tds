import Route from '@ember/routing/route';

export default class Ex1Route extends Route {
  model() {
    return {
      message1: 'Note modifiée',
      message2: 'Note sauvegardée',
    };
  }
}
