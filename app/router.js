import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Abstractroute');
  this.route('board');
  this.route('order', { path: 'order/:order_id' });
  this.route('sections', function() {
    this.route('add');
    this.route('addProduct');
    this.route('delete', { path: 'sections/delete/:section_id' });
    this.route('edit', { path: 'sections/edit/:section_id' });
  });
  this.route('logout');
});
