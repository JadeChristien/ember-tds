import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service userAuth;

  model(){
    return {};
  }

  @action
  login(model) {
    this.store
      .query('employee', { filter: { email: model.email } })
      .then((data) => {
        if (data.length) {
          let user = data.firstObject;
          if (user.password && user.password === model.password) {
            this.userAuth.login(user);
            this.transitionTo('board');
          }
        }
      });
  }
}
