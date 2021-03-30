import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('date') dateCreation;
  @attr('string') status;
  @attr('number') amount;
  @attr('number') toPay;
  @attr('number') itemsNumber;
  @attr('number') missingNumber;
  @attr('number') employee;
  @attr('number') timeslot;
  @belongsTo('user') user;
  @hasMany('orderdetail') orderdetails;
  get count() {
    return this.orderdetails.length;
  }
}
