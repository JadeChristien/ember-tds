import JSONSerializer from './application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class ProductSerializer extends JSONSerializer.extend(
  EmbeddedRecordsMixin
) {
  attrs = {
    section: { embedded: 'always' },
  };
}
