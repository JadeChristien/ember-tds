import Route from '@ember/routing/route';

export default class OrderRoute extends Route {
  model(params) {
    return this.store.findRecord('order', params.order_id, {
      include: 'orderdetails.product.section,user',
    });
  }
}
