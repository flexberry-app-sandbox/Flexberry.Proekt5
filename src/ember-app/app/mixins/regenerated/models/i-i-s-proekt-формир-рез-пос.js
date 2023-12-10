import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  наличиеДеф: DS.attr('boolean'),
  статусЗаказа: DS.attr('i-i-s-proekt-статус-заказа'),
  удовлКл: DS.attr('i-i-s-proekt-удовл-кл'),
  формирРаспред: DS.belongsTo('i-i-s-proekt-формир-распред', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proekt-формир-рез-пос.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наличиеДеф: {
    descriptionKey: 'models.i-i-s-proekt-формир-рез-пос.validations.наличиеДеф.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статусЗаказа: {
    descriptionKey: 'models.i-i-s-proekt-формир-рез-пос.validations.статусЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  удовлКл: {
    descriptionKey: 'models.i-i-s-proekt-формир-рез-пос.validations.удовлКл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  формирРаспред: {
    descriptionKey: 'models.i-i-s-proekt-формир-рез-пос.validations.формирРаспред.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРезПосE', 'i-i-s-proekt-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    формирРаспред: belongsTo('i-i-s-proekt-формир-распред', '', {
      номерДокРаспр: attr('', { index: 1 }),
      докумПостав: belongsTo('i-i-s-proekt-докум-постав', '', {
        организация: belongsTo('i-i-s-proekt-организация', '', {
          наименование: attr('', { index: 2 })
        }, { index: -1, hidden: true }),
        клиенты: belongsTo('i-i-s-proekt-клиенты', '', {
          наимЗаказ: attr('', { index: 3 }),
          телефон: attr('', { index: 4 }),
          адресПостав: attr('', { index: 6 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      пунктПогрузки: belongsTo('i-i-s-proekt-пункт-погрузки', '', {
        наименование: attr('', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    статусЗаказа: attr('', { index: 7 }),
    наличиеДеф: attr('', { index: 8 }),
    удовлКл: attr('', { index: 9 })
  });

  modelClass.defineProjection('ФормирРезПосL', 'i-i-s-proekt-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    статусЗаказа: attr('Статус заказа', { index: 1 }),
    наличиеДеф: attr('Наличие деф', { index: 2 }),
    удовлКл: attr('Удовл кл', { index: 3 }),
    формирРаспред: belongsTo('i-i-s-proekt-формир-распред', 'Номер док распр', {
      номерДокРаспр: attr('Номер док распр', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
