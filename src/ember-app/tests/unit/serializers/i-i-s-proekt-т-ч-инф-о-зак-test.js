import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-т-ч-инф-о-зак', 'Unit | Serializer | i-i-s-proekt-т-ч-инф-о-зак', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt-т-ч-инф-о-зак',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proekt-ед-изм',
    'transform:i-i-s-proekt-статус-заказа',
    'transform:i-i-s-proekt-удовл-кл',

    'model:i-i-s-proekt-докум-постав',
    'model:i-i-s-proekt-клиенты',
    'model:i-i-s-proekt-организация',
    'model:i-i-s-proekt-пункт-погрузки',
    'model:i-i-s-proekt-список-барж',
    'model:i-i-s-proekt-список-контей',
    'model:i-i-s-proekt-т-ч-инф-о-зак',
    'model:i-i-s-proekt-товары',
    'model:i-i-s-proekt-формир-распред',
    'model:i-i-s-proekt-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
