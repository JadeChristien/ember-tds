import JSONSerializer from './application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class OrderSerializer extends JSONSerializer.extend(
  EmbeddedRecordsMixin
) {
  attrs = {
    orderdetails: { embedded: 'always' },
    user: { embedded: 'always' },
  };
}
