import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДокРаспр: DS.attr('number'),
  докумПостав: DS.belongsTo('i-i-s-proekt-докум-постав', { inverse: null, async: false }),
  пунктПогрузки: DS.belongsTo('i-i-s-proekt-пункт-погрузки', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-proekt-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-proekt-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proekt-формир-распред.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокРаспр: {
    descriptionKey: 'models.i-i-s-proekt-формир-распред.validations.номерДокРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПостав: {
    descriptionKey: 'models.i-i-s-proekt-формир-распред.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогрузки: {
    descriptionKey: 'models.i-i-s-proekt-формир-распред.validations.пунктПогрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-proekt-формир-распред.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-proekt-формир-распред.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРаспредE', 'i-i-s-proekt-формир-распред', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспр: attr('', { index: 1 }),
    докумПостав: belongsTo('i-i-s-proekt-докум-постав', 'НомерДокументаПостав', {
      номерДог: attr('НомерДокументаПостав', { index: 2 }),
      организация: belongsTo('i-i-s-proekt-организация', '', {
        наименование: attr('Организация', { index: 3 })
      }, { index: -1, hidden: true }),
      клиенты: belongsTo('i-i-s-proekt-клиенты', '', {
        наимЗаказ: attr('', { index: 4 }),
        телефон: attr('', { index: 5 }),
        адресПостав: attr('', { index: 7 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    пунктПогрузки: belongsTo('i-i-s-proekt-пункт-погрузки', '', {
      наименование: attr('', { index: 6 })
    }, { index: -1, hidden: true }),
    списокБарж: belongsTo('i-i-s-proekt-список-барж', '', {
      номерБаржи: attr('', { index: 8 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-proekt-список-контей', '', {
      номерКонт: attr('', { index: 9 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ФормирРаспредL', 'i-i-s-proekt-формир-распред', {
    номерДокРаспр: attr('Номер док распр', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    пунктПогрузки: belongsTo('i-i-s-proekt-пункт-погрузки', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    списокБарж: belongsTo('i-i-s-proekt-список-барж', 'Производитель', {
      производитель: attr('Производитель', { index: 3 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-proekt-список-контей', 'Наим конт', {
      наимКонт: attr('Наим конт', { index: 4 })
    }, { index: -1, hidden: true }),
    докумПостав: belongsTo('i-i-s-proekt-докум-постав', 'Дата', {
      дата: attr('Дата', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
