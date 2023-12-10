import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-список-барж', 'Unit | Model | i-i-s-proekt-список-барж', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
